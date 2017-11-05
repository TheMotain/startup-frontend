// @flow

import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import classReducer from "./ClassReducer"

const reducers = combineReducers({
    form: formReducer,
    classState: classReducer

});

export default reducers;
