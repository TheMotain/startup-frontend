import React from 'react'
import "./todoList.scss";

class Todos extends React.Component {


    renderTodo(todo) {
        let classes = "";

        if(todo.completed) classes = "checked";

        return <li className={classes} onClick={() => this.props.onTodoClick(todo.id)} key={todo.id}>{todo.text}</li>;
    }

    render() {
        return (
            <ul>
                {

                    this.props.todos.map(this.renderTodo.bind(this))

                }
            </ul>
        );
    }
}

export default Todos;
