import { connect } from 'react-redux'
import * as TodoActions from '../../actions/TodoActions';
import AddTodo from '../../components/Todos/AddTodo';


const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = {
    onTodoClick: TodoActions.checkTodo
};

const AddTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
