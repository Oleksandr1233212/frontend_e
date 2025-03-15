// src/services/apiService.js
import axios from 'axios';
import { getAccessToken } from './authService';

const apiService = axios.create({
  baseURL: 'http://localhost:5048',
});

apiService.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiService;
