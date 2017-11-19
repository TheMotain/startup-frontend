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
    classes: {
        byId: { [number]: Student },
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

/**
 * Reducer pour la classe.
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = (state: State = initialState, action: ReducerUtils.Action) => {
    switch (action.type) {
        case StudentActions.ADD_STUDENT:
            return update(state, {
                postStatus: {
                    $set: ReducerUtils.updatePosting(state.postStatus)
                }
            });

        case StudentActions.ADD_STUDENT_FULFILLED:
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

        case StudentActions.ADD_STUDENT_REJECTED:
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

export const getStudentsNotAssigned = (store: Object) => {
    let state = getState(store);
    return state.students.allIds.map(id => state.students.byId[id]);
};

export const getPostStatus = (store: Object) => {
    let state = getState(store);
    return state.postStatus;
};