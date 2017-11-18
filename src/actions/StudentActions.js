//@flow

export const ADD_STUDENT = "POST_CLASS";
export const ADD_STUDENT_PENDING = ADD_STUDENT + "_PENDING";
export const ADD_STUDENT_FULFILLED = ADD_STUDENT + "_FULFILLED";
export const ADD_STUDENT_REJECTED = ADD_STUDENT + "_REJECTED";

/**
 * Action permettant de créer une classe.
 * Appel la requête de création de classe.
 * @param newClass la classe à créer
 *
 * type : génère les types POST_CLASS_[PENDING/REJECTED/FULFILLED] automatiquement à récupérer dans le reducer.
 * payload : Promise contenant erreur si rejected ou la classe créée si réussi.
 * @returns {{type: string, payload: Promise}}
 */
export function addStudent(student: Student, classroom: Classroom) {
    return {
        type: ADD_STUDENT,
        payload: StudentAPI.addStudent(student, classroom)
    }
}