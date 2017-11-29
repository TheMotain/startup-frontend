/**
 * Created by louis on 01/11/17.
 */
import ApiInstance from "./ApiHelper";
import type {Student} from "../types/Student";

/**
 * Requête POST sur /student avec student en body.
 * @param student
 * @returns {Promise<any>}
 */
async function addStudent(student: Student) {
    return await ApiInstance.post("/student", student);
}

/**
 * Requête GET sur /student.
 * @param entry
 * @returns {Promise<any>}
 */
async function getStudents() {
    return await ApiInstance.get("/student");
}

/**
 * Requête PUT sur /bonus avec student en body.
 * @param entry
 * @returns {Promise<any>}
 */
async function addBonus(student: Student) {
    return await ApiInstance.put("/bonus", student);
}

/**
 * Requête PUT sur /malus avec student en body.
 * @param entry
 * @returns {Promise<any>}
 */
async function addMalus(student: Student) {
    return await ApiInstance.put("/malus", student);
}


export default {
    addStudent: addStudent,
    getStudents: getStudents,
    addBonus: addBonus,
    addMalus: addMalus
};