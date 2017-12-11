//@flow
import type {QCM} from "../types/QCM";
import QCMAPI from "../api/QCMAPI";

export const POST_QCM = "POST_QCM";
export const POST_QCM_PENDING = POST_QCM + "_PENDING";
export const POST_QCM_FULFILLED = POST_QCM + "_FULFILLED";
export const POST_QCM_REJECTED = POST_QCM + "_REJECTED";

export const FETCH_QCM_PER_CLASS = "FETCH_QCM_PER_CLASS";
export const FETCH_QCM_PER_CLASS_PENDING = FETCH_QCM_PER_CLASS + "_PENDING";
export const FETCH_QCM_PER_CLASS_FULFILLED = FETCH_QCM_PER_CLASS + "_FULFILLED";
export const FETCH_QCM_PER_CLASS_REJECTED = FETCH_QCM_PER_CLASS + "_REJECTED";


export function postQCM(newQCM: QCM) {
    return {
        type: POST_QCM,
        payload: QCMAPI.postQCM(newQCM)
    }
}

export function fetchQCMPerClass(idClass: number){
    return {
        type: FETCH_QCM_PER_CLASS,
        payload: QCMAPI.fetchQCMPerClass(idClass)
    }
}