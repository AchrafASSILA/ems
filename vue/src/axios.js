import axios from "axios";
import store from "./store";

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${sessionStorage.getItem("TOKEN")}`;
    return config;
});

export default axiosClient;
