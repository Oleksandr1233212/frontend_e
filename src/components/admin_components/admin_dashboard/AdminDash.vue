
<template>
    <div class="main-wrapper">
      <!-- Підключаємо заголовок та бокову панель -->
      <Headerr />
      <Sidebar />
  
      <div class="page-wrapper">
        <div class="content container-fluid">
  
          <!-- Заголовок сторінки -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <div class="page-sub-header">
                  <h3 class="page-title">Welcome Admin!</h3>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item active">Admin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Карточки статистики -->
          <overview />
          
  
          <!-- Таблиця студентів та активність -->
          <div class="row">
            <ActivityComp class="col-xl-6 d-flex"/>
            <GraphComp class="col-xl-6 d-flex"/>
            <!-- Таблиця "Star Students" -->
            <starStudent />
            <activity />
  
            <!-- Розділ "Student Activity" -->
            
          </div>
  
          <!-- Соціальні блоки -->
          <sozseti />         
            
        </div>
  
        <!-- Футер -->
        <fooater />
      </div>
    </div>
  </template>
  
  <script>
  /*
    Тут ми імпортуємо необхідні компоненти та зображення.
  */
 import GraphComp from './GraphComp.vue';
 import starStudent from './StarStudentsComp.vue'
 import overview from './OverviewComp.vue'
  import Headerr from '@/components/admin_components/HeaderComp.vue';
  import Sidebar from '../SidebarComp.vue';
  import ActivityComp from '../LearningActivityComp.vue';
  import sozseti from './SozsetiComp.vue'
  import fooater from '../FooterComp.vue'
  import activity from './ActivityComp.vue'
  // Імпортуємо зображення для іконок
  
  
  export default {
    name: 'admin',
    components: {
      Headerr,
      Sidebar,
      overview,
      sozseti,
      fooater,
      starStudent,
      activity,
      ActivityComp,
      GraphComp
    },
    
    
  };
  </script>
  
  <style scoped>

  </style> 