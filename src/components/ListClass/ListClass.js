// @flow
import React from 'react'
import type {Classroom} from "../../types/Classroom";

type Props = {
    classes: Array<Classroom>
}

type State = {}

class ListClass extends React.Component<Props, State> {

    state = {};

    renderClasses() {
        return this.props.classes.map((classroom: Classroom) => <li key={classroom.id}>{classroom.className}</li>);
    }

    render() {
        return (
            <ul>
                {this.renderClasses()}
            </ul>
        )
    }
}

export default ListClass;
