// vite.config.js
import { defineConfig, loadEnv } from 'vite'; // Додаємо loadEnv для роботи з .env
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import path from 'path';

// Визначення __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // Завантажуємо змінні середовища для поточного режиму
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Шлях для '@' -> 'src'
      },
    },
    server: {
      port: 3000, // Локальний сервер працює на порту 3000
      open: true, // Автоматично відкриває браузер після запуску
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:5000', // Використання змінної середовища
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''), // Прибираємо префікс /api
        },
      },
    },
    build: {
      sourcemap: true, // Додаємо сорс-мапи для зручності дебагу
    },
  };
});
