// src/services/apiService.js
import axios from 'axios';
import { getAccessToken } from './authService';

const apiService = axios.create({
  baseURL: 'http://164.90.162.39',
});

apiService.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiService;
