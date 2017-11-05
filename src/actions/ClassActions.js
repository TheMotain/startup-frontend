//@flow
import type {Classroom} from "../types/Classroom";
import ClassAPI from "../api/ClassAPI";

export const POST_CLASS = "POST_CLASS";
export const POST_CLASS_PENDING = POST_CLASS + "_PENDING";
export const POST_CLASS_FULFILLED = POST_CLASS + "_FULFILLED";
export const POST_CLASS_REJECTED = POST_CLASS + "_REJECTED";


export function postClass(newClass: Classroom) {
    return {
        type: POST_CLASS,
        payload: ClassAPI.postClass(newClass)
    }
}