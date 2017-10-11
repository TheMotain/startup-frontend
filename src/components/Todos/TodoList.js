// @flow

import React from 'react'
import classnames from "classnames";
import type {Todo} from '../../types/Todo';

import "./todoList.css";

type Props = {
    onTodoClick: (number) => void,
    todos: Array<Todo>
}

class Todos extends React.Component<Props> {


    renderTodo(todo: Todo) {
        let classeNames: number = classnames({
            "checked": todo.completed
        });

        return (
            <li
                className={classeNames}
                onClick={() => this.props.onTodoClick(todo.id)}
                key={todo.id}>
                {todo.text}
            </li>
        );
    }

    renderTodos(todos: Array<Todo>) {
        return todos.map(todo => this.renderTodo(todo));
    }

    render() {
        let {todos} = this.props;

        return (
            <ul className="todo-list">
                {this.renderTodos(todos)}
            </ul>
        );
    }
}

export default Todos;
