import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import MessageListContainer from './containers/Chat/MessageListContainer';
import AddMessageContainer from './containers/Chat/AddMessageContainer';
import registerServiceWorker from './registerServiceWorker';
import store from "./Store";
import "./api/index";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <MessageListContainer/>
            <AddMessageContainer />
        </div>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
