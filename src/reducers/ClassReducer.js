// @flow
import * as ClassActions from "../actions/ClassActions";
import type {Class} from "../types/Class";
import type {PostStatus, updatePosted, updatePosting, updatePostError} from "./ReducerUtils";

type State = {
    classes: {
        byId: { [number]: Class },
        allIds: Array<number>
    },
    postStatus: PostStatus
}

const reducer = (state: State = {}, action: Object) => {
    switch (action.type) {
        case ClassActions.POST_CLASS_PENDING:
            return {
                ...state,
                postStatus: updatePosting(state.postStatus)
            };

        case ClassActions.POST_CLASS_FULFILLED:
            return {
                ...state,
                classes: {

                },
                postStatus: updatePosted(state.postStatus)
            };

        case ClassActions.POST_CLASS_REJECTED:
            return {
                ...state,
                postStatus: updatePostError(state.postStatus, action.payload)
            };
        default:
            return state
    }
};

export default reducer;
