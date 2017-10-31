// @flow

import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import chat from "./ChatReducer";

const reducers = combineReducers({
    form: formReducer,
    chat,
});

export default reducers;
