// @flow

import { combineReducers } from 'redux'

import todos from './TodoReducer'
import chat from './ChatReducer'

const reducers = combineReducers({
    todos,
    chat
});

export default reducers;
