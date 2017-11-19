// @flow

import {connect} from 'react-redux';
import AddStudent from "../../components/AddStudent/AddStudent"
import * as StudentSelectors from "../../reducers/StudentReducer";
import * as StudentActions from "../../actions/StudentActions";

/**
 * Mapping entre le store (global) et les props requises pour le composant CreateClass
 * @param store
 * @returns {{postStatus}}
 */
const mapStateToProps = (store: Object) => {
    return {
        postStatus: StudentSelectors.getPostStatus(store)
    };

};

/**
 * Mapping entre les actions et les props requises pour le composant CreateClass
 * @type {{onPostClass: postClass}}
 */
const mapDispatchToProps = {
    onAddStudent: StudentActions.addStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)
