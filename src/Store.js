import {compose, createStore} from "redux";
import reducer from "./reducers";
import {middleware} from "./middleware/index";

const store = createStore(
    reducer,
    compose(middleware)
);

export default store;
