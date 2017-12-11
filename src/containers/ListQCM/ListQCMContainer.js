// @flow

import {connect} from 'react-redux'
import ListQCM from '../../components/ListQCM/ListQCM'
import * as QCMSelectors from "../../reducers/QCMReducer";
import * as ClassSelectors from "../../reducers/ClassReducer";
import * as QCMActions from "../../actions/QCMActions";
import * as ClassActions from "../../actions/ClassActions";

const mapStateToProps = (state) => ({
    qcmList: QCMSelectors.getQCMList(state),
    fetchStatus: QCMSelectors.getFetchStatus(state) && ClassSelectors.getFetchStatus(state),
    classes: ClassSelectors.getClasses(state)
});

const mapDispatchToProps = {
    fetchQCMList: QCMActions.fetchQCMList,
    fetchClasses: ClassActions.fetchClasses
};

const ListQCMContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListQCM);

export default ListQCMContainer;
