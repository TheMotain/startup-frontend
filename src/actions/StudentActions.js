//@flow

import StudentAPI from "../api/StudentAPI";
import type {Student} from "../types/Student";
import Classroom from "../components/Classroom/ClassroomDisplay";

export const ADD_STUDENT = "ADD_STUDENT";
export const ADD_STUDENT_PENDING = ADD_STUDENT + "_PENDING";
export const ADD_STUDENT_FULFILLED = ADD_STUDENT + "_FULFILLED";
export const ADD_STUDENT_REJECTED = ADD_STUDENT + "_REJECTED";

export const GET_STUDENTS = "GET_STUDENTS";
export const GET_STUDENTS_PENDING = GET_STUDENTS + "_PENDING";
export const GET_STUDENTS_FULFILLED = GET_STUDENTS + "_FULFILLED";
export const GET_STUDENTS_REJECTED = GET_STUDENTS + "_REJECTED";

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
export function addStudent(studentId: number, classroomId: number) {
    return {
        type: ADD_STUDENT,
        payload: StudentAPI.addStudent(studentId, classroomId)
    }
}

/**
 * Action permettant de récupérer la liste des élèves sans classe.
 * Appel la requête de la récupération des élèves.

 * type : génère les types GET_STUDENTS_WITHOUT_CLASS_[PENDING/REJECTED/FULFILLED] automatiquement à récupérer dans le reducer.
 * payload : Promise contenant erreur si rejected ou la liste des élèves si réussi.
 * @returns {{type: string, payload: Promise}}
 */
export function getStudents() {

    return {
        type: GET_STUDENTS,
        payload:StudentAPI.getStudents()
    }
}