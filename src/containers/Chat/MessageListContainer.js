// @flow

import {connect} from 'react-redux'
import MessageList from '../../components/Chat/MessageList'


const mapStateToProps = (state) => ({
    chatMessages: state.chat
});

const mapDispatchToProps = {};

const MessageListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);

export default MessageListContainer;
