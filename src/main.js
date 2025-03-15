import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // Імпорт Pinia
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import './assets/css/style.css';
import 'vue3-carousel/dist/carousel.css';
import 'feather-icons';
import './assets/css/sstyle.css';
import WOW from 'wowjs';
import 'axios';
import 'slimscroll';
import 'feather';
import 'jquery-circle-progress';
import 'chart.js';

// Ініціалізація WOW.js
new WOW.WOW().init();

// Створення додатку
const app = createApp(App);

// Створення та підключення Pinia
const pinia = createPinia();
app.use(pinia);

// Підключення маршрутизатора
app.use(router);

// Монтую додаток
app.mount('#app');
