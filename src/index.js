import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
// Material ui pre-requirement
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import ListClassContainer from "./containers/ListClass/ListClassContainer";
import CreateClassContainer from "./containers/CreateClass/CreateClassContainer";
import registerServiceWorker from "./registerServiceWorker";
import store from "./Store";
import "./index.css";
import "./api/index";


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#AD0000",
        primary2Color: "#8A0000",
        primary3Color: "#720000",
        accent1Color: "#575757",
        accent2Color: "#424242",
        accent3Color: "#282828",
    }
});

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <div>
                <ListClassContainer/>
                <CreateClassContainer/>
            </div>
        </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
