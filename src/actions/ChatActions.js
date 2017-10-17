//@flow
import type {ChatMessage} from "../types/ChatMessage";
import chatChannel from "../api/ChatChannel";

export const POST_MESSAGE = "POST_MESSAGE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export function receiveMessage(chatMessage: ChatMessage) {
    return {
        type: RECEIVE_MESSAGE,
        chatMessage
    }
}

export function updateMessage(chatMessage: ChatMessage) {
    return {
        type: UPDATE_MESSAGE,
        chatMessage
    }
}

export function deleteMessage(chatMessage: ChatMessage) {
    return {
        type: DELETE_MESSAGE,
        chatMessage
    }
}

export function postMessage(chatMessage: ChatMessage) {
    chatChannel.sendMessage(chatMessage);

    return {
        type: POST_MESSAGE
    }
}