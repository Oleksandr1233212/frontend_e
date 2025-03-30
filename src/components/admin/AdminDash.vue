
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
            <activity />
            <starStudent class="col-xl-12 d-flex"/>
            
  
            <!-- Розділ "Student Activity" -->
            
          </div>
  
          <!-- Соціальні блоки -->
          <sozseti />         
            
        </div>
  
        <!-- Футер -->
        <fooater />
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  /*
    Тут ми імпортуємо необхідні компоненти та зображення.
  */
 import GraphComp from '@/components/common/GraphComp.vue';
 import starStudent from '@/components/common/StarStudentsComp.vue'
//  import overview from '@/components/common/OverviewComp.vue'
  import Headerr from '@/components/common/HeaderComp.vue';
  import Sidebar from '@/components/common/SidebarComp.vue';
  import ActivityComp from '@/components/common/LearningActivityComp.vue';
  import sozseti from '@/components/common/SozsetiComp.vue'
  import fooater from '@/components/common/FooterComp.vue'
  import activity from '@/components/common/ActivityComp.vue'
  // Імпортуємо зображення для іконок
  
  
  export default defineComponent({
    name: 'admin',
    components: {
      Headerr,
      Sidebar,
      // overview,
      sozseti,
      fooater,
      starStudent,
      activity,
      ActivityComp,
      GraphComp
    }});
  </script>
  
  <style scoped>

  </style> 