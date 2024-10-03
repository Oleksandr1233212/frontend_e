import { createRouter, createWebHistory } from 'vue-router';
import AppMain from '../components/main_templates/AppMain.vue'
import AppErrorr from '../components/main_templates/AppErr.vue'
import AppAbout from '../components/main_templates/AppAbout.vue'
import AppContact from '../components/main_templates/AppContact.vue'
import AppCourses from '../components/main_templates/AppCourses.vue'
import AppTeam from '../components/main_templates/AppTeam.vue'
import AppTestimonial from '../components/main_templates/AppTestimonial.vue'
import AppLogin from '../components/main_templates/AppLogin.vue'
import AppRegister from '../components/main_templates/AppRegister.vue';
import AppAdmin from '../components/admin_templates/AppAdmin.vue'
import AppADmm from '../components/admin_components/admin_dashboard/AdminDash.vue'
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
  {
    path:'/aga',
    name: 'aga',
    component: AppADmm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;