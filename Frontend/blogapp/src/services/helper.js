import axios from "axios";
export const BASE_URL = 'http://localhost:9292';

export const myAxios=axios.create({
    // Creating axios object for calling the server
    baseURL:BASE_URL,
})