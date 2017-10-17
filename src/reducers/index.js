// @flow

import { combineReducers } from 'redux'

import chat from './ChatReducer'

const reducers = combineReducers({
    chat
});

export default reducers;
