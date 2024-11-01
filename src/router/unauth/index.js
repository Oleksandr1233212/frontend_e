import { createRouter, createWebHistory } from 'vue-router';
import AppMain from '@/layouts/unauthr/AppMain.vue'
import AppErrorr from '@/layouts/unauthr/AppErr.vue'
import AppAbout from '@/layouts/unauthr/AppAbout.vue'
import AppContact from '@/layouts/unauthr/AppContact.vue'
import AppCourses from '@/layouts/unauthr/AppCourses.vue'
import AppTeam from '@/layouts/unauthr/AppTeam.vue'
import AppTestimonial from '@/layouts/unauthr/AppTestimonial.vue'
import AppLogin from '@/layouts/unauthr/AppLogin.vue'
import AppRegister from '@/layouts/unauthr/AppRegister.vue';
import AppAdmin from '@/components/admin_templates/AppAdmin.vue'
import AppADmm from '@/components/admin_components/admin_dashboard/AdminDash.vue'
import AppStud from '@/components/admin_components/student_dashboard/StudentDash.vue'
import AppTeach from '@/components/admin_components/teacher_dashboard/TeacherDash.vue'
const routes = [
  {
    path:'/teach',
    name:'teacher',
    component: AppTeach
  },
  {
    path:'/stud',
    name:'student',
    component: AppStud
  },
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