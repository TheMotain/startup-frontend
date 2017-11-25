// @flow
import React from 'react'
import type {Student} from "../../types/Student";
import type {Classroom} from "../../types/Classroom";
import {
    Card, CardMedia, CardText, CardTitle, Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
    TableRowColumn
} from "material-ui";

type Props = {
    students: Array<Student>,
    classroom: Classroom
}

type State = {}

class ClassroomDisplay extends React.Component<Props, State> {

    state = {};

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
        return (
            <div>
                <Card>
                    <CardMedia
                        overlay={<CardTitle title={this.props.classroom.className}/>}>
                        <img src="https://cdn-images-1.medium.com/max/2000/1*FtSdaaVU76lQFxSp7YLBQg.png" alt="" />
                    </CardMedia>
                    <CardText>
                        <Table>
                            <TableBody displayRowCheckbox={false}>
                                {this.renderClass()}
                            </TableBody>
                        </Table>

                    </CardText>
                </Card>
            </div>
        )
    }
}

export default ClassroomDisplay;
