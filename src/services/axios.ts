// src/services/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://app.wewantwaste.co.uk/api',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;
