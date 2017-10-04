import { connect } from 'react-redux'
import * as TodoActions from '../../actions/TodoActions';
import TodoList from '../../components/Todos/TodoList'


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    onTodoClick: TodoActions.addTodo
};

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
