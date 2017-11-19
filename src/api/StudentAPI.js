/**
 * Created by louis on 01/11/17.
 */
import ApiInstance from "./ApiHelper";
import type {Student} from "../types/Student";
import Classroom from "../components/Classroom/Classroom";

/**
 * Requête POST sur /... avec ... en body.
 * @param student
 * @param classroom
 * @returns {Promise<any>}
 */
async function addStudent(student: Student, classroom: Classroom) {
    //TODO return await ApiInstance.post("/class", newClass);
    return null
}

/**
 * Requête POST sur /... avec ... en body.
 * @param entry
 * @returns {Promise<any>}
 */
async function getStudents() {
    //TODO return await ApiInstance.post("/class", newClass);
    return null
}


export default {
    addStudent: addStudent,
    getStudents: getStudents
};