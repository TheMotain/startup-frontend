// @flow

import {connect} from 'react-redux'
import ListClass from '../../components/ListClass/ListClass'
import * as ClassSelectors from "../../reducers/ClassReducer";

const mapStateToProps = (state) => ({
    classes: ClassSelectors.getClasses(state)
});

const mapDispatchToProps = {};

const ListClassContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListClass);

export default ListClassContainer;
