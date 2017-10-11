// @flow

import {connect} from 'react-redux'
import AddMessage from '../../components/Chat/AddMessage'
import * as ChatActions from "../../actions/ChatActions"

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    postMessage: message => ChatActions.postMessage(message)
};

const AddMessageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddMessage);

export default AddMessageContainer;
