// @flow
import * as ClassActions from "../actions/ClassActions";
import type {Classroom} from "../types/Classroom";
import * as ReducerUtils from "./ReducerUtils";
import update from "immutability-helper";

/**
 * Etat du state class :
 * classes:
 *  byId: map idClasse => classe
 *  allIds: Tableau idClass
 *
 * postStatus: état de la requête d'ajout de classe.
 */
type State = {
    postStatus: ReducerUtils.PostStatus
}

const initialState: State = {
    postStatus: ReducerUtils.createPostStatus()
};

/**
 * Reducer pour les QCMs.
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = (state: State = initialState, action: ReducerUtils.Action) => {
    switch (action.type) {
        case ClassActions.POST_CLASS_PENDING:
            return postQCMPending(state, action);
        case ClassActions.POST_CLASS_FULFILLED:
            return postQCMFulfilled(state, action);
        case ClassActions.POST_CLASS_REJECTED:
            return postQCMRejected(state, action);

        default:
            return state
    }
};


const postQCMRejected = (state: State, action: ReducerUtils.Action) => {
    return update(state, {
        postStatus: {
            $set: ReducerUtils.updatePostError(state.postStatus, action.payload)
        }
    });
};

const postQCMFulfilled = (state: State, action: ReducerUtils.Action) => {
    return update(state, {
        postStatus: {
            $set: ReducerUtils.updatePosted(state.postStatus),
        }
    });
};

const postQCMPending = (state: State, action: ReducerUtils.Action) => {
    return update(state, {
        postStatus: {
            $set: ReducerUtils.updatePosting(state.postStatus)
        }
    });
};

export default reducer;


/*************/
/* SELECTORS */
/*************/

const getState = (store: Object) => {
    return store.QCMState;
};

export const getPostStatus = (store: Object) => {
    let state = getState(store);
    return state.postStatus;
};