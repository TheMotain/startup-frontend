//@flow

import StudentAPI from "../api/StudentAPI";
import type {Student} from "../types/Student";
import Classroom from "../components/Classroom/Classroom";

export const ADD_STUDENT = "ADD_STUDENT";
export const ADD_STUDENT_PENDING = ADD_STUDENT + "_PENDING";
export const ADD_STUDENT_FULFILLED = ADD_STUDENT + "_FULFILLED";
export const ADD_STUDENT_REJECTED = ADD_STUDENT + "_REJECTED";

export const FETCH_STUDENT = "FETCH_STUDENT";
export const FETCH_STUDENT_PENDING = FETCH_STUDENT + "_PENDING";
export const FETCH_STUDENT_FULFILLED = FETCH_STUDENT + "_FULFILLED";
export const FETCH_STUDENT_REJECTED = FETCH_STUDENT + "_REJECTED";

/**
 * Action permettant d'ajouter un élève.
 * Appel la requête de l'ajout d'un élève.
 * @param student l'élève
 * @param classroom la classe
 *
 * type : génère les types ADD_STUDENT_[PENDING/REJECTED/FULFILLED] automatiquement à récupérer dans le reducer.
 * payload : Promise contenant erreur si rejected ou l'élève ajouté si réussi.
 * @returns {{type: string, payload: Promise}}
 */
export function addStudent(student: Student, classroom: Classroom) {
    return {
        type: ADD_STUDENT,
        payload: StudentAPI.addStudent(student, classroom)
    }
}

/**
 * Action permettant de chercher des élèves.
 * Appel la requête de la récupération des élèves.
 * @param entry l'entrée

 * type : génère les types FETCH_STUDENTS_[PENDING/REJECTED/FULFILLED] automatiquement à récupérer dans le reducer.
 * payload : Promise contenant erreur si rejected ou la liste des élèves si réussi.
 * @returns {{type: string, payload: Promise}}
 */
export function fetchStudent(entry: string) {
    return {
        type: FETCH_STUDENT,
        payload: StudentAPI.fetchStudents(entry)
    }
}