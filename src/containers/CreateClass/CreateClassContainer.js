// @flow

import {connect} from 'react-redux';
import CreateClass from "../../components/CreateClass/CreateClass"
import * as ClassSelectors from "../../reducers/ClassReducer";
import * as ClassActions from "../../actions/ClassActions";

/**
 * Mapping entre le store (global) et les props requises pour le composant CreateClass
 * @param store
 * @returns {{postStatus}}
 */
const mapStateToProps = (store: Object) => {
    return {
        postStatus: ClassSelectors.getPostStatus(store)
    };

};

/**
 * Mapping entre les actions et les props requises pour le composant CreateClass
 * @type {{onPostClass: postClass}}
 */
const mapDispatchToProps = {
    onPostClass: ClassActions.postClass
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClass)
