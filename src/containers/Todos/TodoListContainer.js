// @flow

import { connect } from 'react-redux'
import * as TodoActions from '../../actions/TodoActions';
import TodoList from '../../components/Todos/TodoList'


const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = {
    onTodoClick: TodoActions.checkTodo
};

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
