// @flow
import * as ReducerUtils from "./ReducerUtils";
import update from "immutability-helper";
import * as QCMAction from "../actions/QCMActions";

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
        case QCMAction.POST_QCM_PENDING:
            return postQCMPending(state, action);
        case QCMAction.POST_QCM_FULFILLED:
            return postQCMFulfilled(state, action);
        case QCMAction.POST_QCM_REJECTED:
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