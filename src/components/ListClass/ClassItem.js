// @flow
import React from 'react'
import type {Classroom} from "../../types/Classroom";
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

type Props = {
    classroom: Classroom
}

type State = {
    open: boolean
}

class ClassItem extends React.Component<Props, State> {

    state = {
        open: false
    };

    handleNestedListToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <Divider />
                <ListItem
                    key={3}
                    primaryText={this.props.classroom.className}
                    open={this.state.open}
                    onClick={this.handleNestedListToggle.bind(this)}
                    onNestedListToggle={this.handleNestedListToggle.bind(this)}
                    nestedItems={[
                        <ListItem key={1}>{this.props.classroom.id}</ListItem>,
                    ]}
                />
            </div>
        );
    }
}

export default ClassItem;
