import { createRouter, createWebHistory } from 'vue-router';
import AppMain from '../main_files/AppMain.vue'
import AppErrorr from '../others/AppErr.vue'
import AppAbout from '../others/AppAbout.vue'
import AppContact from '../others/AppContact.vue'
import AppCourses from '../others/AppCourses.vue'
import AppTeam from '../others/AppTeam.vue'
import AppTestimonial from '../others/AppTestimonial.vue'
import AppLogin from '../others/AppLogin.vue'
import AppRegister from '../others/AppRegister.vue';
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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;