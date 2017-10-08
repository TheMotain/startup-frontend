import { connect } from 'react-redux'
import * as TodoActions from '../../actions/TodoActions';
import AddTodo from '../../components/Todos/AddTodo';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    onAddTodo: TodoActions.addTodo
};

const AddTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
