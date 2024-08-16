import { createRouter, createWebHistory } from 'vue-router';
import AppMain from '../components/AppMain.vue'
import AppErrorr from '../components/AppErr.vue'
import AppAbout from '../components/AppAbout.vue'
import AppContact from '../components/AppContact.vue'
import AppCourses from '../components/AppCourses.vue'
import AppTeam from '../components/AppTeam.vue'
import AppTestimonial from '../components/AppTestimonial.vue'
import AppLogin from '../components/AppLogin.vue'
import AppRegister from '../components/AppRegister.vue';
import AppAdmin from '../components/AppAdmin.vue'
const routes = [
  {
    path: '/',
    name: 'Main',
    component: AppMain
  },
  {
    path: '/about',
    name: 'About',
    component: AppAbout
  },
  {
    path: '/error',
      name: 'Errorr',
      component: AppErrorr
      
  },
  {
    path: '/contact',
      name: 'Contact',
      component: AppContact
      
  },
  {
    path: '/courses',
      name: 'Courses',
      component: AppCourses
      
  },
  {
    path: '/team',
      name: 'Team',
      component: AppTeam
      
  },
  {
    path: '/testimonial',
      name: 'Testimonial',
      component: AppTestimonial
      
  },
  {
    path: '/login',
    name: 'login',
    component: AppLogin
  },
  {
    path: '/register',
    name: 'register',
    component: AppRegister
  },
  {
    path: '/admin',
    name: 'admin',
    component: AppAdmin
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;