import {createChannel} from "./index";
import * as ChatActions from "../actions/ChatActions";
import store from "../Store";

const channel = createChannel({
    channelName: "chat",
    onMessage: (message) => {
        console.log(message);
        store.dispatch(ChatActions.receiveMessage(message));
    }
});

export default channel;