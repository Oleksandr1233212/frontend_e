<script>
import AppNavbarComponent from '@/components/main_components/Navbar.vue';
import AppCarouselComponent from '@/components/main_components/Carousel.vue';
import AppServicesComponent from '@/components/main_components/Services.vue';
import AppAboutComponent from '@/components/main_components/About.vue';
import AppCategoriesComponent from '@/components/main_components/Categories.vue';
import AppCoursesComponent from '@/components/main_components/Courses.vue';
import AppTeamComponent from '@/components/main_components/Team.vue';
import AppTestimonialsComponent from '@/components/main_components/Testimonials.vue';
import AppFooterComponent from '@/components/main_components/Footer.vue';
export default {
  name: 'App',
  components: {
    AppNavbarComponent,
    AppCarouselComponent,
    AppServicesComponent,
    AppAboutComponent,
    AppCategoriesComponent,
    AppCoursesComponent,
    AppTeamComponent,
    AppTestimonialsComponent,
    AppFooterComponent
   
  }
};
</script>
<template>
    <div id="app">
      <AppNavbarComponent />
      <AppCarouselComponent />
      <AppServicesComponent />
      <AppAboutComponent />
      <AppCategoriesComponent />
      <AppCoursesComponent />
      <AppTeamComponent />
      <AppTestimonialsComponent />
      <AppFooterComponent />
      
    </div>
  </template>
  
