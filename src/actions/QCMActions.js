//@flow
import type {QCM} from "../types/QCM";
import QCMAPI from "../api/QCMAPI";

export const POST_QCM = "POST_QCM";
export const POST_QCM_PENDING = POST_QCM + "_PENDING";
export const POST_QCM_FULFILLED = POST_QCM + "_FULFILLED";
export const POST_QCM_REJECTED = POST_QCM + "_REJECTED";


export function postQCM(newClass: QCM) {
    return {
        type: POST_QCM,
        payload: QCMAPI.postQCM(newClass)
    }
}