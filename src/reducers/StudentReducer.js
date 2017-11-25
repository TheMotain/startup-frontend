// @flow
import * as StudentActions from "../actions/StudentActions";
import * as ReducerUtils from "./ReducerUtils";
import update from "immutability-helper";
import type {Student} from "../types/Student";

/**
 * Etat du state class :
 * classes:
 *  byId: map idClasse => classe
 *  allIds: Tableau idStudents
 *
 * postStatus: état de la requête d'ajout de classe.
 */
type State = {
    students: {
        byId: { [number]: Student },
        allIds: Array<number>
    },
    fetchStatus: ReducerUtils.FetchStatus,
    postStatus: ReducerUtils.PostStatus,
}

const initialState: State = {
    students: {
        byId: {},
        allIds: []
    },
    fetchStatus: ReducerUtils.createFetchStatus(),
    postStatus: ReducerUtils.createPostStatus()
};

/**
 * Reducer pour la classe.
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = (state: State = initialState, action: ReducerUtils.Action) => {
    switch (action.type) {
        case StudentActions.ADD_STUDENT_PENDING: return addStudentPending(state);
        case StudentActions.ADD_STUDENT_FULFILLED: return addStudentFulfilled(state, action);
        case StudentActions.ADD_STUDENT_REJECTED: return addStudentRejected(state, action);
        case StudentActions.GET_STUDENTS_PENDING: return getStudentsPending(state);
        case StudentActions.GET_STUDENTS_FULFILLED: return getStudentsFulfilled(state, action);
        case StudentActions.GET_STUDENTS_REJECTED: return getStudentsRejected(state, action);
        default: return state
    }
};

export default reducer;

function addStudentPending(state: State){

    return update(state, {
        postStatus: {
            $set: ReducerUtils.updatePosting(state.postStatus)
        }
    });

}

function addStudentFulfilled(state: State, action: ReducerUtils.Action){

    let student: Student = action.payload;

    if (student.id === undefined) return state;
    let studentId: number = student.id;

    return update(state, {
        postStatus: {
            $set: ReducerUtils.updatePosted(state.postStatus),
        },
        classes: {
            byId: {
                [studentId]: {
                    $set: student
                }
            },
            allIds: {
                $push: [studentId]
            }
        }
    });
}

function addStudentRejected(state: State, action: ReducerUtils.Action){

    return update(state, {
        postStatus: {
            $set: ReducerUtils.updatePostError(state.postStatus, action.payload)
        }
    });
}

function getStudentsPending(state: State){

    return update(state, {
        fetchStatus: {
            $set: ReducerUtils.updateFetching(state.fetchStatus)
        }
    });

}

function getStudentsFulfilled(state: State, action: ReducerUtils.Action){

    let students: Array<Student> = action.payload;

    return update(state, {
        fetchStatus: {
            $set: ReducerUtils.updateFetching(state.fetchStatus)
        },
        students: {
            byId: {
                $set: ReducerUtils.arrayToMap(students)
            },
            allIds: {
                $set: students.map((student)=> student.id)
            }
        }
    });
}

function getStudentsRejected(state: State, action: ReducerUtils.Action){

    return update(state, {
        fetchStatus: {
            $set: ReducerUtils.updateFetching(state.fetchStatus)
        }
    });
}


/*************/
/* SELECTORS */
/*************/

const getState = (store: Object) => {
    return store.studentState;
};

export const getStudentsNotAssigned = (store: Object) => {
    let state = getState(store);
    console.log(state)
    return state.students.allIds.map(id => state.students.byId[id]).filter((student) => student.idClass == null);
};

export const getStudentsForClass = (store: Object, classId: number) => {
    let state = getState(store);
    console.log(state)
    return state.students.allIds.map(id => state.students.byId[id]).filter((student) => student.idClass == classId);
};

export const getPostStatus = (store: Object) => {
    let state = getState(store);
    return state.postStatus;
};