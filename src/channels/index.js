//@flow
import socket from "atmosphere.js";

console.log("Atmosphere : ", socket);

const host = "ws://localhost:8080/";

export function createChannel(channelInfo: Object) {
    let request = {
        url : host + channelInfo.channelName,
        contentType : "application/json",
        logLevel : 'debug',
        transport : 'websocket',
        trackMessageLength : true,
        reconnectInterval : 5000,
        onOpen: channelInfo.onOpen,
        onClientTimeout: channelInfo.onClientTimeout,
        onMessage: (response) => {

            let body = response.responseBody;

            try {
                var json = socket.util.parseJSON(body);
            } catch (e) {
                console.log('This doesn\'t look like a valid JSON: ', json);
                return;
            }

            channelInfo.onMessage(json);
        }
    };
    let channel = socket.subscribe(request);
    return {
        ...channel,
        pushObject: (obj) => {
            channel.push(socket.util.stringifyJSON(obj));
        }
    };
}
