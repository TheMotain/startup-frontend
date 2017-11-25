// @flow

import {connect} from 'react-redux';
import AddStudent from "../../components/AddStudent/AddStudent"
import * as StudentSelectors from "../../reducers/StudentReducer";
import * as StudentActions from "../../actions/StudentActions";

/**
 * Mapping entre le store (global) et les props requises pour le composant AddStudent
 * @param store
 * @returns {{postStatus}}
 */
const mapStateToProps = (store: Object) => {
    return {
        postStatus: StudentSelectors.getPostStatus(store),
        students : StudentSelectors.getStudentsNotAssigned(store),
        //TODO récuperer la classe active
        classroom : {id : 1, className: "CM2"}
    };

};

/**
 * Mapping entre les actions et les props requises pour le composant AddStudent
 * @type {{onAddStudent: addStudent}}
 */
const mapDispatchToProps = {
    onAddStudent: StudentActions.addStudent,
    getStudents: StudentActions.getStudents
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)
