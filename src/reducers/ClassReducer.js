// @flow
import * as ClassActions from "../actions/ClassActions";
import type {Classroom} from "../types/Classroom";
import * as ReducerUtils from "./ReducerUtils";
import update from "immutability-helper";

type State = {
    classes: {
        byId: { [number]: Classroom },
        allIds: Array<number>
    },
    postStatus: ReducerUtils.PostStatus
}

const initialState: State = {
    classes: {
        byId: {},
        allIds: []
    },
    postStatus: ReducerUtils.createPostStatus()
};

const reducer = (state: State = initialState, action: ReducerUtils.Action) => {
    switch (action.type) {
        case ClassActions.POST_CLASS_PENDING:
            return update(state, {
                postStatus: {
                    $set: ReducerUtils.updatePosting(state.postStatus)
                }
            });

        case ClassActions.POST_CLASS_FULFILLED:
            let classroom: Classroom = action.payload;

            if (!classroom.id) return state;
            let classroomId: number = classroom.id;

            return update(state, {
                postStatus: {
                    $set: ReducerUtils.updatePosted(state.postStatus),
                },
                classes: {
                    byId: {
                        [classroomId]: {
                            $set: classroom
                        }
                    },
                    allIds: {
                        $push: [classroomId]
                    }
                }
            });

        case ClassActions.POST_CLASS_REJECTED:
            return update(state, {
                postStatus: {
                    $set: ReducerUtils.updatePostError(state.postStatus, action.payload)
                }
            });

        default:
            return state
    }
};

export default reducer;


/*************/
/* SELECTORS */
/*************/

const getState = (store: Object) => {
    return store.classState;
};

export const getPostStatus = (store: Object) => {
    let state = getState(store);
    return state.postStatus;
};