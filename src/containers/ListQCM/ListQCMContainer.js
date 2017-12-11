// @flow

import {connect} from 'react-redux'
import ListQCM from '../../components/ListQCM/ListQCM'
import * as QCMSelectors from "../../reducers/QCMReducer";
import * as QCMActions from "../../actions/QCMActions";

const mapStateToProps = (state) => ({

    qcmList: QCMSelectors.getQCMPerClass(state),
    fetchStatus: QCMSelectors.getFetchStatus(state)
});

const mapDispatchToProps = {
    fetchQCMPerClass: QCMActions.fetchQCMPerClass
};

const ListQCMContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListQCM);

export default ListQCMContainer;
