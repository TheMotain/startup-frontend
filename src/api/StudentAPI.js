/**
 * Created by louis on 01/11/17.
 */
import ApiInstance from "./ApiHelper";

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

export default {
    addStudent: addStudent
};