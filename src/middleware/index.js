/**
 * Created by louis on 01/11/17.
 */

import {applyMiddleware, compose} from "redux";
import promiseMiddleware from "redux-promise-middleware";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            actionCreators: {
                setUserType: (userType: number) => {
                    return {
                        type: "SET_USER_TYPE",
                        payload: userType
                    };
                }
            }
        }) : compose;

export const middleware = composeEnhancers(
    applyMiddleware(thunk, promiseMiddleware()),
);