import axios from 'axios';
import { APP_CONFIGS } from '../Data/Environment';
import { GetToken } from './Storage';

const Api = axios.create({
    baseURL: `${APP_CONFIGS.AppBackendUrl}`,
    timeout: 1000 * 60 * 2, // 2 minutes
});

// Attach interceptors
Api.interceptors.request.use(
    async (config) => {
        // Example: retrieving a token from localStorage or a helper function
        const userToken = (GetToken()) ?? '';

        config.headers.Authorization = userToken;
        config.headers.Accept = 'application/json';
        config.headers['Authorization'] = "Bearer " + userToken;

        return config;
    },
    (error) => Promise.reject(error)
);

export default Api;
