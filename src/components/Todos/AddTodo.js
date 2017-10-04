import React from 'react'

class Todos extends React.Component {

    constructor() {
        super();

        this.state = {
            value: ""
        }
    }

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
                    }}
                >
                    Add todo !
                </button>
            </div>
        );
    }
}

export default Todos;
