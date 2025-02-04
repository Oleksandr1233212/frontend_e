// src/composables/useAuth.js

import { ref } from 'vue';
import { saveTokens, clearTokens } from '@/services/authService';
import apiService from '@/services/apiService';

// Хук для авторизації
export const useAuth = () => {
  const user = ref(null); // Реактивний об'єкт для збереження інформації про користувача
  const isAuthenticated = ref(false); // Стан авторизації
  const error = ref(null); // Стан помилок авторизації

  // Логін користувача
  const login = async (email, password) => {
    try {
      const response = await apiService.post('/auth/login', { email, password });
      const { accessToken, refreshToken, user: userData } = response.data;

      // Зберігаємо токени у localStorage
      saveTokens(accessToken, refreshToken);

      // Оновлюємо стан
      user.value = userData;
      isAuthenticated.value = true;
      error.value = null;
    } catch (err) {
      // Обробляємо помилку логіна
      error.value = err.response?.data?.message || 'Не вдалося увійти. Перевірте дані.';
    }
  };

  // Логаут користувача
  const logout = () => {
    // Видаляємо токени
    clearTokens();

    // Скидаємо стан
    user.value = null;
    isAuthenticated.value = false;
  };

  // Перевірка авторизації
  const checkAuth = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
    }
  };

  // Повертаємо об'єкти й функції для використання у компонентах
  return {
    user,
    isAuthenticated,
    error,
    login,
    logout,
    checkAuth,
  };
};
