import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

// Material ui pre-requirement
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from 'react-tap-event-plugin';


import ListClassContainer from "./containers/ListClass/ListClassContainer";
import CreateClassContainer from "./containers/CreateClass/CreateClassContainer";
import registerServiceWorker from "./registerServiceWorker";
import store from "./Store";
import "./index.css";
import "./api/index";

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <div>
                <ListClassContainer />
                <CreateClassContainer />
            </div>
        </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
