// @flow
import axios from "axios";

let ENDPOINT;
if (process.env.NODE_ENV === 'production') {
    ENDPOINT = "http://localhost:8080";
} else {
    ENDPOINT = "http://localhost:8080";
}

const getApiInstance = () => {
    return axios.create({
        baseURL: ENDPOINT,
        timeout: 10000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};

export default getApiInstance();