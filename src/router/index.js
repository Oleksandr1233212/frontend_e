// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import { authGuard, roleGuard } from '@/router/guards';
import { useAuthStore } from '@/stores/authStore'; // Імпорт Pinia Store

// 🔹 Імпорти публічних компонентів
import AppMain from '@/layouts/AppMain.vue';
import AppAbout from '@/layouts/AppAbout.vue';
import AppErrorr from '@/layouts/AppErr.vue';
import AppContact from '@/layouts/AppContact.vue';
import AppCourses from '@/layouts/AppCourses.vue';
import AppTeam from '@/layouts/AppTeam.vue';
import AppTestimonial from '@/layouts/AppTestimonial.vue';
import AppLogin from '@/layouts/AppLogin.vue';
import AppRegister from '@/layouts/AppRegister.vue';

// 🔹 Імпорти адміністративних компонентів
import AppAdmin from '@/components/admin/AppAdmin.vue';
import AdminDash from '@/components/admin/AdminDash.vue';
import AddStudent from '@/components/admin/students/AddStudent.vue';
import EditStudent from '@/components/admin/students/EditStudent.vue';
import StudentDetails from '@/components/admin/students/StudentDetails.vue';
import Students from '@/components/admin/students/Students.vue';
import AddTeacher from '@/components/admin/teachers/AddTeacher.vue';
import EditTeacher from '@/components/admin/teachers/EditTeacher.vue';
import TeacherDetails from '@/components/admin/teachers/TeacherDetails.vue';
import Teachers from '@/components/admin/teachers/Teachers.vue';

// 🔹 Імпорти компонентів для викладача
import TeacherDash from '@/components/teacher/TeacherDash.vue';

// 🔹 Імпорти компонентів для студента
import StudentDash from '@/components/student/StudentDash.vue';

// 🔹 Імпорт профілю
import AppProfile from '@/components/common/Profile.vue';

// 🔹 Публічні маршрути (доступні всім)
const publicRoutes = [
  { path: '/', name: 'Main', component: AppMain },
  { path: '/about', name: 'About', component: AppAbout },
  { path: '/error', name: 'Error', component: AppErrorr },
  { path: '/contact', name: 'Contact', component: AppContact },
  { path: '/courses', name: 'Courses', component: AppCourses },
  { path: '/team', name: 'Team', component: AppTeam },
  { path: '/testimonial', name: 'Testimonial', component: AppTestimonial },
  { path: '/login', name: 'Login', component: AppLogin },
  { path: '/register', name: 'Register', component: AppRegister },
];

// 🔹 Захищені маршрути (тільки для авторизованих користувачів)
const protectedRoutes = [
  // 🔹 Адміністратор
  {
    path: '/admin',
    component: AdminDash,
    meta: { requiresAuth: true, role: 'admin' },
    beforeEnter: [authGuard, roleGuard(['admin'])],
    children: [
      { path: '', name: 'AdminDash', component: AdminDash },
      { path: 'edit-teacher', name: 'EditTeacher', component: EditTeacher },
      { path: 'teachers', name: 'Teachers', component: Teachers },
      { path: 'details-teacher', name: 'DetailsTeacher', component: TeacherDetails },
      { path: 'add-teacher', name: 'AddTeacher', component: AddTeacher },
      { path: 'edit-student', name: 'EditStudent', component: EditStudent },
      { path: 'details-student', name: 'DetailsStudent', component: StudentDetails },
      { path: 'students', name: 'Students', component: Students },
      { path: 'add-student', name: 'AddStudent', component: AddStudent },
    ],
  },
  // 🔹 Викладач
  {
    path: '/teach',
    component: TeacherDash,
    meta: { requiresAuth: true, role: 'teacher' },
    beforeEnter: [authGuard, roleGuard(['teacher'])],
  },
  // 🔹 Студент
  {
    path: '/stud',
    component: StudentDash,
    meta: { requiresAuth: true, role: 'student' },
    beforeEnter: [authGuard, roleGuard(['student'])],
  },
  // 🔹 Профіль (для всіх авторизованих)
  {
    path: '/prof',
    name: 'Profile',
    component: AppProfile,
    meta: { requiresAuth: true },
    beforeEnter: authGuard,
  },
];

// 🔹 Об'єднання маршрутів
const routes = [
  ...publicRoutes,
  ...protectedRoutes,
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: AppErrorr }, // 404
];

// 🔹 Створення маршрутизатора
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔹 Глобальний `beforeEach`, щоб перевіряти авторизацію перед кожним переходом
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Оновлюємо статус авторизації перед перевіркою доступу
  authStore.checkAuth();

  // Якщо користувач уже залогінений і заходить на `/login`, перенаправляємо його на дашборд
  if (to.path === '/login' && authStore.isAuthenticated) {
    switch (authStore.userRole) {
      case 'admin':
        return next('/admin');
      case 'teacher':
        return next('/teach');
      case 'student':
        return next('/stud');
      default:
        return next('/');
    }
  }

  next();
});

export default router;
