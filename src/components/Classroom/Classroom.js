// @flow
import React from 'react'

type Props = {
    students: Array<Student>
}

type State = {}

class Classroom extends React.Component<Props, State> {

    state = {};

    renderClass() {
        return this.props.students.map((student: Student) => <li key={student.id}>{student.name}</li>);
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
