<template>
  <div id="app">
    <!-- Відображення маршруту -->
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';

export default {
  name: "App",
  setup() {
    const authStore = useAuthStore();

    // Перевірка авторизації при завантаженні додатку
    onMounted(() => {
      authStore.checkAuth();
    });
  },
};
</script>

<style>
/* Підключення глобальних стилів */
@import "@/assets/css/global.css";
</style>
