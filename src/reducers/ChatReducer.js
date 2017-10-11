// @flow
import type {ChatMessage} from "../types/ChatMessage";
import * as ChatActions from "../actions/ChatActions";

const chat = (state: Array<ChatMessage> = [], action: Object) => {
    switch (action.type) {
        case ChatActions.RECEIVE_MESSAGE:
            return [
                ...state,
                action.chatMessage
            ];
        default:
            return state
    }
};

export default chat;
