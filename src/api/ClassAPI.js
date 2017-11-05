/**
 * Created by louis on 01/11/17.
 */
import ApiInstance from "./ApiHelper";
import type {Classroom} from "../types/Classroom";

async function postClass(newClass: Classroom) {
    return await ApiInstance.get("/postClass.json", newClass);
}

export default {
    postClass: postClass
};