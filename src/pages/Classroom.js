// @flow

import React, {Component} from "react";
import BackCover from "../components/BackCover/BackCover";
import CreateQCMContainer from "../containers/CreateQCM/CreateQCMContainer";
import ClassroomContainer from "../containers/Classroom/ClassroomContainer";

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
                <CreateQCMContainer classId={this.props.params.id}/>
                <ClassroomContainer id={this.props.params.id}/>
            </div>
        );
    }
}

export default Classroom;
