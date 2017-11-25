/**
 * Created by louis on 01/11/17.
 */
import ApiInstance from "./ApiHelper";
import type {Student} from "../types/Student";
import Classroom from "../components/Classroom/ClassroomDisplay";

/**
 * Requête POST sur /... avec ... en body.
 * @param student
 * @param classroom
 * @returns {Promise<any>}
 */
async function addStudent(studentId: number, classroomId: number) {
    return await ApiInstance.post("/addClassToStudent", {
        "idClass": classroomId,
        "idStudent": studentId
    });
}

/**
 * Requête POST sur /... avec ... en body.
 * @param entry
 * @returns {Promise<any>}
 */
async function getStudents() {
    return await ApiInstance.get("/student");
}


export default {
    addStudent: addStudent,
    getStudents: getStudents
};