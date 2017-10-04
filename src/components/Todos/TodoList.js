import React from 'react'

class Todos extends React.Component {

    displayTodos() {
        if(this.props.todos)
        this.props.todos.map(todo =>
            <li key={todo.id}>{todo.text}</li>
        )
    }

    render() {
        return (
            <ul>
                {



                }
            </ul>
        );
    }
}

export default Todos;
