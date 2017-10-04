import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import TodoListContainer from './containers/Todos/TodoListContainer';
import AddTodoContainer from './containers/Todos/AddTodoContainer';
import registerServiceWorker from './registerServiceWorker';
import store from "./Store";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <TodoListContainer/>
            <AddTodoContainer/>
        </div>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
