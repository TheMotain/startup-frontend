// @flow
import type {ChatMessage} from "../types/ChatMessage";
import * as ChatActions from "../actions/ChatActions";

type State = {[number]: ChatMessage}

const chat = (state: State = {}, action: Object) => {
    switch (action.type) {
        case ChatActions.RECEIVE_MESSAGE:
            return receiveMessage(state, action);
        case ChatActions.DELETE_MESSAGE:
            return deleteMessage(state, action);
        case ChatActions.UPDATE_MESSAGE:
            return receiveMessage(state, action);
        default:
            return state
    }
};


function receiveMessage(state: State, action: Object) {
    let messageId = action.chatMessage.id;
    return {
        ...state,
        [messageId]: action.chatMessage
    };
}

function deleteMessage(state, action) {
    let messageId = action.chatMessage.id;
    let stateCopy = Object.assign({}, state);
    delete stateCopy[messageId];
    return stateCopy;
}

export default chat;
