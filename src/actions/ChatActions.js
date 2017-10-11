//@flow
import type {ChatMessage} from "../types/ChatMessage";
import chatChannel from "../channels/ChatChannel";

export const POST_MESSAGE = "POST_MESSAGE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export function receiveMessage(chatMessage: ChatMessage) {
    return {
        type: RECEIVE_MESSAGE,
        chatMessage
    }
}

export function postMessage(chatMessage: ChatMessage) {
    let pushed = chatChannel.pushObject(chatMessage);
    console.log(pushed);
    return {
        type: POST_MESSAGE
    }
}