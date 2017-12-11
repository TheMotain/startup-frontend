// @flow
import React from 'react'
import type {QCM} from "../../types/QCM";
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router'

type Props = {
    qcm: QCM
}

class QCMItem extends React.Component<Props, State> {
    render() {
        return (
            <Link to={`/qcm/${this.props.qcm.id}/`}>
                <ListItem
                    key={3}
                    primaryText={this.props.qcm.title}
                />
            </Link>
        );
    }
}

export default QCMItem;
