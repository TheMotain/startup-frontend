// @flow

import {connect} from 'react-redux'
import CreateQCM from "../../components/CreateQCM/CreateQCM";
import * as QCMSelectors from "../../reducers/QCMReducer";
import * as QCMActions from "../../actions/QCMActions";
import { push } from 'react-router-redux'

const mapStateToProps = (store, props) => ({
    classId: props.classId,
    postStatus: QCMSelectors.getPostStatus(store)
});

const mapDispatchToProps = (props) => {

    console.log(props);
    return {
        onPostQCM: QCMActions.postQCM,
        redirectToQcm: (qcmId) => push('/qcm/' + qcmId)
    }
};

const CreateQCMContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateQCM);

export default CreateQCMContainer;
