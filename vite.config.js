// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { fileURLToPath } from 'url';
import path from 'path';

// Визначаємо __dirname для ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});