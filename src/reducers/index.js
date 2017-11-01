// @flow

import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import chat from "./ChatReducer";
import classReducer from "./ClassReducer"

const reducers = combineReducers({
    form: formReducer,
    classState: classReducer,
    chat
});

export default reducers;
