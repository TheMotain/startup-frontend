// @flow

import {connect} from 'react-redux'
import ClassroomDisplay from '../../components/Classroom/ClassroomDisplay'
import type {Classroom} from "../../types/Classroom";
import * as StudentSelector from "../../reducers/StudentReducer";
import * as ClassSelector from "../../reducers/ClassReducer";
import * as ClassActions from "../../actions/ClassActions";
import * as StudentActions from "../../actions/StudentActions";

const mapStateToProps = (store: Object, props:Object) => {

    let classroom: ?Classroom = ClassSelector.getClass(store, props.id);

    return{
        postStatus: StudentSelector.getPostStatus(store),
        students: (classroom && classroom.id ? StudentSelector.getStudentsForClass(store, classroom.id) : []),
        studentsNotAssigned: (classroom && classroom.id ? StudentSelector.getStudentsNotAssigned(store) : []),
        fetchStatusClass: ClassSelector.getFetchStatus(store),
        fetchStatusStudent: StudentSelector.getFetchStatus(store),
        classroom : classroom,

    }
};

const mapDispatchToProps = {
    onAddStudent: StudentActions.addStudent,
    fetchClasses: ClassActions.fetchClasses,
    fetchStudents: StudentActions.getStudents


};

const ClassroomContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassroomDisplay);

export default ClassroomContainer;
