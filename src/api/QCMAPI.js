/**
 * Created by louis on 01/11/17.
 */
import ApiInstance from "./ApiHelper";
import type {QCM} from "../types/QCM";

/**
 * Requête POST sur /qcm avec qcm en body.
 * @param qcm
 * @returns {Promise<any>}
 */
function postQCM(qcm: QCM) {
    console.log(qcm);
    return ApiInstance.post("/qcm", qcm);
}

/**
 * Requête GET sur /qcm/classroom avec qcm en body.
 * @param idClass
 * @returns {Promise<any>}
 */
function fetchQCMPerClass(idClass: number) {
    return ApiInstance.get("/qcm/classroom"+ idClass);
}

function fetchQCMs() {
    return ApiInstance.get("/qcm");
}

function fetchAnswers(qcmId: number) {
    return ApiInstance.post(`/resultQcm/${qcmId}`);
}


export default {
    postQCM: postQCM,
    fetchQCMPerClass: fetchQCMPerClass,
    fetchQCMs: fetchQCMs,
    fetchAnswers: fetchAnswers
};