// @flow
import React from 'react'

type Props = {
    onAddTodo: (string) => void
}

type State = {
    value: string
}

class Todos extends React.Component<Props, State> {

    state = {
        value: ""
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e) => {
                    this.setState({
                        value: e.target.value
                    });
                }}/>
                <button
                    onClick={() => {
                        this.props.onAddTodo(this.state.value);
                        this.setState({value: ""})
                    }}
                >
                    Add todo !
                </button>
            </div>
        );
    }
}

export default Todos;
