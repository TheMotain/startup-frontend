// @flow

import {connect} from 'react-redux'
import ClassroomDisplay from '../../components/Classroom/ClassroomDisplay'
import type {Classroom} from "../../types/Classroom";
import * as StudentSelector from "../../reducers/StudentReducer";

const mapStateToProps = (store: Object) => {

    let classroom: Classroom = {id : 1, className: "CM2"}

    if(classroom.id == null) return;

    return{

        students: StudentSelector.getStudentsForClass(store, classroom.id),
        //TODO, relier la classe ouverte avec le truc
        classroom : classroom

    }
};

const mapDispatchToProps = {};

const ClassroomContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassroomDisplay);

export default ClassroomContainer;
