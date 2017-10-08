// @flow
import type {Todo} from "../types/Todo";

const todos = (state: Array<Todo> = [], action: Object) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'CHECK_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state
    }
};

export default todos
