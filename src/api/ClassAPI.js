/**
 * Created by louis on 01/11/17.
 */
import ApiInstance from "./ApiHelper";
import type {Class} from "../types/Class";

async function postClass(newClass: Class) {
    return await ApiInstance.get("/class");
}

export default {
    postClass: postClass
};