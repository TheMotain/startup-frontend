// @flow

import React, {Component} from "react";
import BackCover from "../components/BackCover/BackCover";
import ClassroomContainer from "../containers/Classroom/ClassroomContainer";
import {RaisedButton, Tab, Tabs, Toolbar} from "material-ui";
import ListQCMContainer from "../containers/ListQCM/ListQCMContainer";

type Props = {
    params: Object
};

type State = {
}

/**
 * Page de gestion d'une classe
 * Accessible via /classes/idClass

 */
class Classroom extends Component<Props, State> {
    render() {
        return (
            <div>
                <BackCover />
                <ClassroomContainer id={this.props.params.id}/>
            </div>
        );
    }
}

export default Classroom;
