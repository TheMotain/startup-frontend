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

function getQCMList(){
    return ApiInstance.get("/qcm");
}



export default {
    postQCM: postQCM,
    getQCMList: getQCMList
};