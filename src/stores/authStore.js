// src/stores/authStore.js
import { defineStore } from 'pinia';
import { saveTokens, clearTokens, getAccessToken } from '@/services/authService';
import apiService from '@/services/apiService';
import { jwtDecode } from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    userRole: localStorage.getItem('userRole') || null, // Завантажуємо роль із localStorage
    error: null,
  }),

  actions: {
    async login(username, password) {
      try {
        const response = await apiService.post('/api/auth/login', { username, password });

        
        // Отримуємо дані з відповіді
        const { accessToken, refreshToken } = response.data;
        saveTokens(accessToken, refreshToken);

        // Декодуємо токен, щоб отримати роль
        const decodedToken = jwtDecode(accessToken);
        this.userRole = decodedToken.role;

        // Зберігаємо роль у localStorage для збереження після перезавантаження
        localStorage.setItem('userRole', this.userRole);

        // Встановлюємо статус авторизації
        this.isAuthenticated = true;
        this.error = null;
        alert('login!!!');
      } catch (err) {
        this.error = err.response?.data?.message || 'Login failed';
        this.isAuthenticated = false;
      }
    },

    logout() {
      clearTokens();
      this.isAuthenticated = false;
      this.userRole = null;
      localStorage.removeItem('userRole');
    },

    checkAuth() {
      const token = getAccessToken();
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          this.userRole = decodedToken.role;
          this.isAuthenticated = true;
        } catch (err) {
          this.logout(); // Якщо токен невалідний, виходимо з акаунту
        }
      } else {
        this.isAuthenticated = false;
      }
    },
  },
});
