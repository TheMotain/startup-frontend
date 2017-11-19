// @flow
import React from 'react'
import type {Student} from "../../types/Student";

type Props = {
    students: Array<Student>
}

type State = {}

class Classroom extends React.Component<Props, State> {

    state = {};

    renderClass() {
        return this.props.students.map((student: Student) => <li key={student.id}>{student.studentName}</li>);
    }

    render() {
        return (
            <ul>
                {this.renderClasses()}
            </ul>
        )
    }
}

export default Classroom;
