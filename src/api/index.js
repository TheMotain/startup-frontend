//@flow

import SockJS from "sockjs-client";
import Stomp from "stompjs";

type ChannelInfo = {
    channelName: string,
    onInsert?: (Object) => void,
    onUpdate?: (Object) => void,
    onDelete?: (Object) => void
}

type ChannelResponse = {
    type: string,
    data: Object,
    table: string
}

const socket = new SockJS('http://localhost:8080/ws');
const stompClient = Stomp.over(socket);

let pendingSubscribtions: Array<ChannelInfo> = [];
let isConnected = false;

stompClient.debug = function (str) {
};
stompClient.connect({}, () => {
    isConnected = true;
    subscribePendingList();
}, (err) => console.error("error:", err));


function messageRouting(response: ChannelResponse, channel: ChannelInfo) {
    switch (response.type) {
        case "INSERT":
            if (channel.onInsert) channel.onInsert(response.data);
            break;
        case "DELETE":
            if (channel.onDelete) channel.onDelete(response.data);
            break;
        case "UPDATE":
            if (channel.onUpdate) channel.onUpdate(response.data);
            break;
        default:
            console.error("type not handle : ", response);
            break;
    }
}

function subscribePendingList() {
    pendingSubscribtions.forEach((channelInfo: ChannelInfo) => {
        stompClient.subscribe(channelInfo.channelName, (response) => {
            messageRouting(JSON.parse(response.body), channelInfo);
        });
    });
    pendingSubscribtions = [];
}

export function createChannel(channelInfo: ChannelInfo) {
    pendingSubscribtions.push(channelInfo);
    if (isConnected) {
        subscribePendingList();
    }

    return {
        send: (channel: string, obj: Object) => {
            stompClient.send(channel, {}, JSON.stringify(obj));
        }
    }
}
