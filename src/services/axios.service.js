import axios from "axios";
// import {createBrowserHistory} from "history";

import {API_TOKEN, baseURL} from "../configs";

// const history = createBrowserHistory();

const axiosService = axios.create({baseURL});
// let isRefreshing = false

axiosService.interceptors.request.use((config) => {
    if (API_TOKEN) {
        config.headers.Authorization = `Bearer ${API_TOKEN}`
    }
    return config
})

// axiosService.interceptors.response.use((config) => {
//     return config
// },
//     async (error) => {
//     const
//     }
//     )


export {
    axiosService
}