// vue.config.js
const { defineConfig } = require('@vue/cli-service');
require('dotenv').config(); // Завантаження змінних середовища з .env

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080, // Локальний сервер працює на порту 8080
    open: true, // Автоматично відкриває сторінку в браузері після запуску
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000', // Використання змінної середовища
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // Перезапис шляху
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'), // Шлях для '@' -> 'src'
      },
    },
  },
});
