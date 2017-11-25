// @flow
import React from 'react'
import type {Student} from "../../types/Student";
import type {Classroom} from "../../types/Classroom";
import classroomImage from "./classroom.png"
import {
    Card, CardText, Table, TableBody, TableRow,
    TableRowColumn
} from "material-ui";
import type * as ReducerUtils from "../../reducers/ReducerUtils";
import BackCover from "../BackCover/BackCover";
import AddStudent from "../AddStudent/AddStudent";

type Props = {
    students: Array<Student>,
    studentsNotAssigned: Array<Student>,
    classroom: ?Classroom,
    fetchStatusClass: ReducerUtils.FetchStatus,
    fetchStatusStudent: ReducerUtils.FetchStatus,
    fetchClasses: ()=>Promise<any>,
    fetchStudents: ()=>Promise<any>,
    postStatus: ReducerUtils.PostStatus,
    onAddStudent: (number, number) => Promise<Student>,

}

type State = {}

class ClassroomDisplay extends React.Component<Props, State> {


    state = {};

    constructor(props: Object){
        super(props);
        this.props.fetchClasses();
        this.props.fetchStudents();

    }

    renderClass() {
        return this.props.students.filter((student)=> student.idClass == this.props.classroom.id).map((student: Student) =>
            <TableRow>
                <TableRowColumn>{student.firstName}</TableRowColumn>
                <TableRowColumn>{student.lastName}</TableRowColumn>
                <TableRowColumn>10</TableRowColumn>
            </TableRow>

        );
    }

    render() {

        if(this.props.fetchStatusClass.fetching || this.props.fetchStatusStudent.fetching){

            return "loading"
        }
        if(!this.props.classroom){

            return <div> Aucune Classe trouvée avec cet identifiant </div>
        }
        return (
            <Card>
                <BackCover
                    title={this.props.classroom.className}
                    image={classroomImage}/>
                <AddStudent classroom={this.props.classroom}
                            students={this.props.studentsNotAssigned}
                            postStatus={this.props.postStatus}
                            onAddStudent={this.props.onAddStudent}/>
                <CardText>
                    <Table>
                        <TableBody displayRowCheckbox={false}>
                            {this.renderClass()}
                        </TableBody>
                    </Table>

                </CardText>
            </Card>
        )
    }
}

export default ClassroomDisplay;
