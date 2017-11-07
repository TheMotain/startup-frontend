// @flow
import axios from "axios";

let ENDPOINT;
if (process.env.NODE_ENV === 'production') {
    ENDPOINT = "http://localhost:8080";
} else {
    ENDPOINT = "http://172.18.13.114:8080/";
}

const getApiInstance = () => {
    let axiosInstance = axios.create({
        baseURL: ENDPOINT,
        timeout: 10000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });


    axiosInstance.interceptors.response.use(function (response) {
        return response.data; // unwrap data response
    }, function (error) {
        // If there is error data, return the error array.
        if(error.response && error.response.data) {
            return Promise.reject(error.response.data);
        }

        // Else return default error message
        return Promise.reject(["Erreur inconnue, veuillez contacter le support."]);
    });
    return axiosInstance;
};

export default getApiInstance();