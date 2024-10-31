// src/api.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api', // Adjust this URL based on your server address
});

// This interceptor will inject the Authorization header before a request is sent
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default API;

