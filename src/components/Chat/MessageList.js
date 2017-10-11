// @flow
import React from 'react'
import type {ChatMessage} from "../../types/ChatMessage";

type Props = {
    chatMessages: Array<ChatMessage>
}

type State = {}

class MessageList extends React.Component<Props, State> {

    renderChatMessage(chatMessage: ChatMessage) {
        return (
            <li>
                {chatMessage.author} : {chatMessage.message}
            </li>
        )
    }

    render() {
        return  (
            <ul>
                {this.props.chatMessages.map(this.renderChatMessage.bind(this))}
            </ul>
        )
    }
}

export default MessageList;
