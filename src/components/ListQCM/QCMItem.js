// @flow
import React from 'react'
import type {QCM} from "../../types/QCM";
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router'

type Props = {
    qcm: QCM
}

type State = {
    open: boolean
}

class QCMItem extends React.Component<Props, State> {
    render() {
        return (
                <ListItem
                    key={3}
                    primaryText={this.props.qcm.className}
                />
        );
    }
}

export default QCMItem;
