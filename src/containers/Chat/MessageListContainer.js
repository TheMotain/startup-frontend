// @flow

import {connect} from 'react-redux'
import MessageList from '../../components/Chat/MessageList'


const mapStateToProps = (state) => ({
    chatMessages: Object.values(state.chat)
});

const mapDispatchToProps = {};

const MessageListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);

export default MessageListContainer;
