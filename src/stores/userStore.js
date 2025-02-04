// src/stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: null, // Профіль користувача
  }),
  getters: {
    userRole: (state) => state.profile?.role || '', // Отримання ролі користувача
    userName: (state) => state.profile?.username || '', // Отримання імені користувача
  },
  actions: {
    setUserProfile(profile) {
      this.profile = profile; // Зберігає профіль користувача
    },
    clearUserProfile() {
      this.profile = null; // Очищує профіль користувача
    },
  },
});
