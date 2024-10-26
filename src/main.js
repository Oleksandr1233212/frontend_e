import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
// import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import './css/style.css';
import 'vue3-carousel/dist/carousel.css';
import router from './router/unauth'
import 'feather-icons'
import './css/sstyle.css'
import WOW from 'wowjs';
import 'axios'
import 'slimscroll'
import 'feather'
new WOW.WOW().init();


const app = createApp(App);
app.use(router)
// app.use(router);
// app.use(store);

app.mount('#app');
