// @flow

import React, {Component} from "react";
import ClassroomContainer from "../containers/Classroom/ClassroomContainer";

type Props = {
    params: Object
};

type State = {
}

class Classroom extends Component<Props, State> {
    render() {
        return (
            <div>
                <ClassroomContainer id={this.props.params.id}/>

            </div>
        );
    }
}

export default Classroom;
