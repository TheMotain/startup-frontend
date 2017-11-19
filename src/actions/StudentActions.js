//@flow

import StudentAPI from "../api/StudentAPI";
import type {Student} from "../types/Student";
import Classroom from "../components/Classroom/Classroom";

export const ADD_STUDENT = "ADD_STUDENT";
export const ADD_STUDENT_PENDING = ADD_STUDENT + "_PENDING";
export const ADD_STUDENT_FULFILLED = ADD_STUDENT + "_FULFILLED";
export const ADD_STUDENT_REJECTED = ADD_STUDENT + "_REJECTED";

export const GET_STUDENTS_WITHOUT_CLASS = "GET_STUDENTS_WITHOUT_CLASS";
export const GET_STUDENTS_WITHOUT_CLASS_PENDING = GET_STUDENTS_WITHOUT_CLASS + "_PENDING";
export const GET_STUDENTS_WITHOUT_CLASS_FULFILLED = GET_STUDENTS_WITHOUT_CLASS + "_FULFILLED";
export const GET_STUDENTS_WITHOUT_CLASS_REJECTED = GET_STUDENTS_WITHOUT_CLASS + "_REJECTED";

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
 * Action permettant de récupérer la liste des élèves sans classe.
 * Appel la requête de la récupération des élèves.

 * type : génère les types GET_STUDENTS_WITHOUT_CLASS_[PENDING/REJECTED/FULFILLED] automatiquement à récupérer dans le reducer.
 * payload : Promise contenant erreur si rejected ou la liste des élèves si réussi.
 * @returns {{type: string, payload: Promise}}
 */
export function getStudentsNotAssigned() {

    var students = StudentAPI.getStudents();
    var studentsNotAssigned = [];
    for(var student in students){
        if(student.idClass == null){
            studentsNotAssigned.add(student);
        }
    }

    return {
        type: GET_STUDENTS_WITHOUT_CLASS,
        payload:studentsNotAssigned
    }
}