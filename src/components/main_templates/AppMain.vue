<script>
import AppNavbarComponent from '../main_components/Navbar.vue';
import AppCarouselComponent from '../main_components/Carousel.vue';
import AppServicesComponent from '../main_components/Services.vue';
import AppAboutComponent from '../main_components/About.vue';
import AppCategoriesComponent from '../main_components/Categories.vue';
import AppCoursesComponent from '../main_components/Courses.vue';
import AppTeamComponent from '../main_components/Team.vue';
import AppTestimonialsComponent from '../main_components/Testimonials.vue';
import AppFooterComponent from '../main_components/Footer.vue';
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
  
