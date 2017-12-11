//@flow
import type {QCM} from "../types/QCM";
import QCMAPI from "../api/QCMAPI";

export const POST_QCM = "POST_QCM";
export const POST_QCM_PENDING = POST_QCM + "_PENDING";
export const POST_QCM_FULFILLED = POST_QCM + "_FULFILLED";
export const POST_QCM_REJECTED = POST_QCM + "_REJECTED";
export const FETCH_QCM_LIST = "FETCH_QCM_LIST";
export const FETCH_QCM_LIST_PENDING = FETCH_QCM_LIST + "_PENDING";
export const FETCH_QCM_LIST_FULFILLED = FETCH_QCM_LIST + "_FULFILLED";
export const FETCH_QCM_LIST_REJECTED = FETCH_QCM_LIST + "_REJECTED";


export function postQCM(newQCM: QCM) {
    return {
        type: POST_QCM,
        payload: QCMAPI.postQCM(newQCM)
    }
}

export function fetchQCMList(){
    return {
        type: FETCH_QCM_LIST,
        payload: QCMAPI.getQCMList()
    }
}