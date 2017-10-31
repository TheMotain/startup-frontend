import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import CreateClassContainer from "./containers/CreateClass/CreateClassContainer";
import registerServiceWorker from "./registerServiceWorker";
import store from "./Store";
import "./index.css";
import "./api/index";

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <div>
                <CreateClassContainer />
            </div>
        </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
