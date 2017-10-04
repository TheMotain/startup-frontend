import { combineReducers } from 'redux'

import todos from './TodoReducer'

const reducers = combineReducers({
    todos
});

export default reducers;
