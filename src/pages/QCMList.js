// @flow

import React, {Component} from "react";
import BackCover from "../components/BackCover/BackCover";
import CreateQCMContainer from "../containers/CreateQCM/CreateQCMContainer";
import ListQCMContainer from "../containers/ListQCM/ListQCMContainer";

type Props = {
    params: Object
};

type State = {
}

class QCMList extends Component<Props, State> {
    render() {
        return (
            <div>
                <ListQCMContainer idClassroom={this.props.params.id}/>
            </div>
        );
    }
}

export default QCMList;
