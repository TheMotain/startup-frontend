// @flow
import * as ReducerUtils from "./ReducerUtils";
import update from "immutability-helper";
import * as QCMAction from "../actions/QCMActions";
import type {QCM} from "../types/QCM";

/**
 * Etat du state class :
 * qcm:
 *  byId: map idQCM => qcm
 *  allIds: Tableau idQCM
 *
 * postStatus: état de la requête d'ajout de classe.
 */
type State = {
    qcmList: {
        byId: { [number]: QCM },
        allIds: Array<number>
    },
    postStatus: ReducerUtils.PostStatus,
    fetchStatus: ReducerUtils.FetchStatus
}

const initialState: State = {
    qcmList: {
        byId: {},
        allIds: []
    },
    postStatus: ReducerUtils.createPostStatus(),
    fetchStatus: ReducerUtils.createFetchStatus(),
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
        case QCMAction.FETCH_QCM_LIST_PENDING:
            return fetchQCMListPending(state, action);
        case QCMAction.FETCH_QCM_LIST_FULFILLED:
            return fetchQCMListFulfilled(state, action);
        case QCMAction.FETCH_QCM_LIST_REJECTED:
            return fetchQCMListRejected(state, action);


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

const fetchQCMListPending = (state: State, action: ReducerUtils.Action) => {
    return update(state, {
        fetchStatus: {
            $set: ReducerUtils.updateFetchError(state.fetchStatus, action.payload)
        }
    });
};

const fetchQCMListFulfilled = (state: State, action: ReducerUtils.Action) => {
    return update(state, {
        fetchStatus: {
            $set: ReducerUtils.updateFetched(state.fetchStatus),
        }
    });
};

const fetchQCMListRejected = (state: State, action: ReducerUtils.Action) => {
    return update(state, {
        fetchStatus: {
            $set: ReducerUtils.updateFetching(state.fetchStatus)
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


export const getQCMList = (store: Object) => {
    let state = getState(store);
    return state.qcmList.allIds.map(id => state.qcmList.byId[id]);
};

export const getPostStatus = (store: Object) => {
    let state = getState(store);
    return state.postStatus;
};

export const getFetchStatus = (store: Object) => {
    let state = getState(store);
    return state.fetchStatus;
};