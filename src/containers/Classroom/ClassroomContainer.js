// @flow

import {connect} from 'react-redux'
import Classroom from '../../components/Classroom/Classroom'
import * as StudentSelector from "../../reducers/StudentReducer";

const mapStateToProps = (state) => ({
    students: StudentSelector.getStudentsNotAssigned(state)
});

const mapDispatchToProps = {};

const ClassroomContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Classroom);

export default ClassroomContainer;
