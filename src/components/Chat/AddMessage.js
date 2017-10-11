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

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={e => {
                        this.setState({message: e.target.value});
                    }}
                />
                <button
                    onClick={() => {
                        console.log("postMessage");
                        this.props.postMessage({
                            message: this.state.message,
                            author: "toto"
                        });
                        this.setState({message: ""});
                    }}
                >
                    Poster
                </button>

            </div>
        );
    }
}

export default AddMessage;
