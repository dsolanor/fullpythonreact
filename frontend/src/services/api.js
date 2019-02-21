import axios from "axios";

const API_URL = "http://localhost:5000";
const DEFAULT_HEADERS = {
    "content-type": "application/json"
};

export const LOCAL_STORAGE_KEY = "accestoken";

axios.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY) || null;

        Object.assign(config.headers.common, {
            "token-type": "Bearer",
            Authorization: `Bearer ${accessToken}`
        });

        return config;
    },
    error => Promise.reject(error)
);

axios.interceptors.response.use(
    response => {
        const accessToken = response.headers["access_token"];

        if (accessToken) {
            localStorage.setItem(LOCAL_STORAGE_KEY, accessToken);
        }

        return response;
    },
    error => Promise.reject(error)
);

/**
 *  helper method to perform an api requests
 *
 * @param path
 * @param method
 * @param data
 * @param headers
 * @returns {Promise<*>}
 */
export const apiRequest = async ({
    path,
    method = "GET",
    data,
    headers = {}
}) => {
    try {
        const response = await axios({
            url: API_URL + path,
            method,
            data: data || {},
            headers: Object.assign({}, DEFAULT_HEADERS, headers)
        });

        return response.data;
    } catch (error) {
        return error;
    }
};
