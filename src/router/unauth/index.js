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
import AppProfile from '@/components/admin_components/others/Profile.vue'
import AppAddStud from '@/components/admin_components/admin_dashboard/students/add-student.vue'
import AppEditStud from '@/components/admin_components/admin_dashboard/students/edit-student.vue'
import AppDetailsStud from '@/components/admin_components/admin_dashboard/students/student-details.vue'
import AppAllStud from '@/components/admin_components/admin_dashboard/students/students.vue'
import AppAddTeach from '@/components/admin_components/admin_dashboard/teachers/add-teacher.vue'
import AppTeachs from '@/components/admin_components/admin_dashboard/teachers/teachers.vue'
import AppEditTeach from '@/components/admin_components/admin_dashboard/teachers/edit-teacher.vue'
import AppDetailsTeach from '@/components/admin_components/admin_dashboard/teachers/teacher-details.vue'
const routes = [
  {
    path:'/admin/edit-teacher',
    name:'edit-teacher',
    component: AppEditTeach
  },
  {
    path:'/admin/teachers',
    name:'teachers',
    component: AppTeachs
  },
  {
    path:'/admin/details-teacher',
    name:'details-teacher',
    component: AppDetailsTeach
  },
  {
    path:'/admin/add-teacher',
    name:'add-teacher',
    component: AppAddTeach
  },
  {
    path:'/admin/edit-student',
    name:'edit-student',
    component: AppEditStud
  },
  {
    path:'/admin/details-student',
    name:'details-student',
    component: AppDetailsStud
  },
  {
    path:'/admin/students',
    name:'students',
    component: AppAllStud
  },
  {
    path:'/admin/add-student',
    name:'add-student',
    component: AppAddStud
  },
  {
    path:'/prof',
    name:'profile',
    component: AppProfile
  },
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
    path: '/adminn',
    name: 'admin',
    component: AppAdmin
  },
  {
    path:'/admin',
    name: 'admin',
    component: AppADmm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;