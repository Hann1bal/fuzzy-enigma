import axios from "axios";

export const API_URL = "https://localhost:7160/api/"
const $api = axios.create(
    {
        // withCredentials: true,
        baseURL: API_URL,
    }
)
$api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    config.headers!.Accept = "*";
    // config.headers("Access-Control-Allow-Credentials","*")
    return config;
})
export default $api;