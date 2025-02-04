// src/router/guards.js

import { useAuthStore } from '@/stores/authStore';

// 🔹 Глобальний guard для перевірки авторизації
export const authGuard = (to, from, next) => {
  const authStore = useAuthStore();

  // Викликаємо checkAuth() перед перевіркою авторизації
  authStore.checkAuth();

  // Якщо сторінка вимагає авторизації, але користувач не авторизований – перенаправляємо на /login
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return next('/login');
  }

  next(); // Якщо користувач авторизований, продовжуємо навігацію
};

// 🔹 Глобальний guard для перевірки ролей
export const roleGuard = (allowedRoles) => {
  return (to, from, next) => {
    const authStore = useAuthStore();

    // Якщо у користувача немає ролі або його роль не входить до списку дозволених, перенаправляємо на /403
    if (!authStore.userRole || !allowedRoles.includes(authStore.userRole)) {
      return next('/403'); // Сторінка "Доступ заборонено"
    }

    next(); // Якщо роль дозволена, продовжуємо навігацію
  };
};

// 🔹 Guard для перевірки доступу адміністратора
export const adminGuard = roleGuard(['admin']);

// 🔹 Guard для перевірки доступу викладача
export const teacherGuard = roleGuard(['teacher']);

// 🔹 Guard для перевірки доступу студента
export const studentGuard = roleGuard(['student']);
