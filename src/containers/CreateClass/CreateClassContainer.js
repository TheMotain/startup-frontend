// @flow

import {connect} from 'react-redux';
import CreateClass from "../../components/CreateClass/CreateClass"
import * as ClassSelectors from "../../reducers/ClassReducer";
import * as ClassActions from "../../actions/ClassActions";

const mapStateToProps = (state) => {
    return {
        postStatus: ClassSelectors.getPostStatus(state)
    };

};

const mapDispatchToProps = {
    onPostClass: ClassActions.postClass
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClass)
