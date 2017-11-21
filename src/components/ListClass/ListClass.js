// @flow
import React from 'react'
import type {Classroom} from "../../types/Classroom";
import {List} from 'material-ui/List';
import ClassItem from "./ClassItem";

type Props = {
    classes: Array<Classroom>,
    fetchClasses: () => Promise<any>
}

type State = {}

class ListClass extends React.Component<Props, State> {

    state = {};

    constructor(props: Props) {
        super(props);
        this.props.fetchClasses();
    }

    renderClasses() {
        return this.props.classes.map((classroom: Classroom) => <ClassItem key={classroom.id} classroom={classroom} />);
    }

    render() {
        return (
            <List>
                {this.renderClasses()}
            </List>
        )
    }
}

export default ListClass;
