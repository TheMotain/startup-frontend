// @flow

import {connect} from 'react-redux'
import ListQCM from '../../components/ListQCM/ListQCM'
import * as QCMSelectors from "../../reducers/QCMReducer";
import * as QCMActions from "../../actions/QCMActions";

const mapStateToProps = (state) => {
    // TODO get from page
    let idClass = 1;
    return {
        qcmList: QCMSelectors.getQCMPerClass(state, idClass),
        fetchStatus: QCMSelectors.getFetchQCMStatus(state)
    }
};

const mapDispatchToProps = {
    fetchQCMs: QCMActions.fetchQCMs
};

const ListQCMContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListQCM);

export default ListQCMContainer;
