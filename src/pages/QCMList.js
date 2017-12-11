// @flow

import React, {Component} from "react";
import ListQCMContainer from "../containers/ListQCM/ListQCMContainer";

type Props = {
};

type State = {
}

/**
 * Page de listage des QCMs.
 * Accessible via /qcmList
 */
class QCMList extends Component<Props, State> {

    render() {
        return (
            <div>
                <ListQCMContainer />
            </div>
        );
    }
}

export default QCMList;
