import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:5001/clone-67753/us-central1/api",
    withCredentials:false,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})

export default instance;