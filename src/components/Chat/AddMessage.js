// @flow
import React from 'react'
import type {ChatMessage} from "../../types/ChatMessage";

type Props = {
    postMessage: (ChatMessage) => void
}

type State = {
    message: string
}

class AddMessage extends React.Component<Props, State> {

    state = {
        message: ""
    };

    sendMessage() {
        this.props.postMessage({
            content: this.state.message,
            sender: "toto"
        });
        this.setState({message: ""});
    }

    render() {
        return (
            <div className="add-message-component">
                <input
                    type="text"
                    onChange={e => {
                        this.setState({message: e.target.value});
                    }}
                    value={this.state.message}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            this.sendMessage()
                        }
                    }}
                />
                <button
                    onClick={() => {
                        this.sendMessage()
                    }}
                >
                    Poster
                </button>

            </div>
        );
    }
}

export default AddMessage;
