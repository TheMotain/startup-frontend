// @flow
import * as ChatActions from "../ChatActions";
import type {ChatMessage} from "../../types/ChatMessage";

describe("chatACtions.js", () => {
    test('receiveMessage', () => {
        let chatMessage: ChatMessage = {
            id: 1,
            sender: "toto",
            content: "tata"
        };

        expect(ChatActions.receiveMessage(chatMessage)).toEqual({
            type: ChatActions.RECEIVE_MESSAGE,
            chatMessage
        });
    });
});