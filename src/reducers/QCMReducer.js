// @flow
import * as ReducerUtils from "./ReducerUtils";
import update from "immutability-helper";
import * as QCMAction from "../actions/QCMActions";
import type {QCM} from "../types/QCM";
import type {StudentAnswers} from "../types/StudentAnswer";

/**
 * Etat du state class :
 * qcm:
 *  byId: map idQCM => qcm
 *  allIds: Tableau idQCM
 *
 * postStatus: état de la requête d'ajout de classe.
 */
type State = {
    qcms: {
        byId: { [number]: QCM },
        allIds: Array<number>
    },
    answers: {
        [number]: {
            byId: { [number]: StudentAnswers },
            allIds: Array<number>
        }
    },
    postStatus: ReducerUtils.PostStatus,
    fetchQCMStatus: ReducerUtils.FetchStatus,
    fetchAnswersStatus: ReducerUtils.FetchStatus
}

const initialState: State = {
    qcms: {
        byId: {},
        allIds: []
    },
    answers: {},
    postStatus: ReducerUtils.createPostStatus(),
    fetchQCMStatus: ReducerUtils.createFetchStatus(),
    fetchAnswersStatus: ReducerUtils.createFetchStatus()
};


function newAnswerState(answersMap) {
    return {
        byId: answersMap,
        allIds: Object.values(answersMap).forEach((e: StudentAnswers) => e.answerId)
    };
}

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
        case QCMAction.FETCH_QCM_PENDING:
            return fetchQCMPending(state, action);
        case QCMAction.FETCH_QCM_FULFILLED:
            return fetchQCMFulfilled(state, action);
        case QCMAction.FETCH_QCM_REJECTED:
            return fetchQCMRejected(state, action);

        case QCMAction.FETCH_ANSWERS_PENDING:
            return fetchAnswersPending(state, action);
        case QCMAction.FETCH_ANSWERS_FULFILLED:
            return fetchAnswersFulfilled(state, action);
        case QCMAction.FETCH_ANSWERS_REJECTED:
            return fetchAnswersRejected(state, action);


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

const fetchQCMRejected = (state: State, action: ReducerUtils.Action) => {
    return update(state, {
        fetchQCMStatus: {
            $set: ReducerUtils.updateFetchError(state.fetchQCMStatus, action.payload)
        }
    });
};

const fetchQCMFulfilled = (state: State, action: ReducerUtils.Action) => {

    let qcms: Array<QCM> = action.payload;

    return update(state, {
        fetchQCMStatus: {
            $set: ReducerUtils.updateFetched(state.fetchQCMStatus),
        },
        qcms: {
            byId: {
                $set: ReducerUtils.arrayToMap(qcms)
            },
            allIds: {
                $set: qcms.map(qcm => qcm.id)
            }
        }
    });
};

const fetchQCMPending = (state: State, action: ReducerUtils.Action) => {
    return update(state, {
        fetchQCMStatus: {
            $set: ReducerUtils.updateFetching(state.fetchQCMStatus)
        }
    });
};

const fetchAnswersRejected = (state: State, action: ReducerUtils.Action) => {
    return update(state, {
        fetchAnswersStatus: {
            $set: ReducerUtils.updateFetchError(state.fetchAnswersStatus, action.payload)
        }
    });
};

function getAnswerMap(answers: Array<Object>) {
    let map = {};

    answers.forEach(item => {
        let answerId = item.anwser.id;
        let studentId = item.student.id;

        if (!map[answerId]) {
            map[answerId] = {
                answerId: answerId,
                studentIds: []
            };
        }

        map[answerId].studentIds.push(studentId);
    });

    return map;
}

const fetchAnswersFulfilled = (state: State, action: ReducerUtils.Action) => {
    let answersMap: { [number]: StudentAnswers } = getAnswerMap(action.payload);
    let qcmId: number = action.meta.qcmId;

    return update(state, {
        fetchAnswersStatus: {
            $set: ReducerUtils.updateFetched(state.fetchAnswersStatus),
        },
        answers: {
            [qcmId]: {
                $set: newAnswerState(answersMap)
            }
        }
    });
};

const fetchAnswersPending = (state: State, action: ReducerUtils.Action) => {
    return update(state, {
        fetchAnswersStatus: {
            $set: ReducerUtils.updateFetching(state.fetchAnswersStatus)
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

export const getQCMPerClass = (store: Object, classId: number) => {
    let state = getState(store);
    return state.qcmList.allIds.map(id => state.qcmList.byId[id]).filter((qcm: QCM) => qcm.idClass === classId);
};

export const getPostStatus = (store: Object) => {
    let state = getState(store);
    return state.postStatus;
};

export const getQcmAnswers = (store: Object, qcmId: number) => {
    let state = getState(store);
    return state.answers[qcmId].byId;
};

export const getFetchQCMStatus = (store: Object) => {
    let state = getState(store);
    return state.fetchQCMStatus;
};

export const getFetchAnswersStatus = (store: Object) => {
    let state = getState(store);
    return state.fetchAnswersStatus;
};