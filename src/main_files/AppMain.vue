<script>
import AppNavbarComponent from './Navbar.vue';
import AppCarouselComponent from './Carousel.vue';
import AppServicesComponent from './Services.vue';
import AppAboutComponent from './About.vue';
import AppCategoriesComponent from './Categories.vue';
// import AppCoursesComponent from './main_files/Courses.vue';
import AppTeamComponent from './Team.vue';
import AppTestimonialsComponent from './Testimonials.vue';
import AppFooterComponent from './Footer.vue';
export default {
  name: 'App',
  components: {
    AppNavbarComponent,
    AppCarouselComponent,
    AppServicesComponent,
    AppAboutComponent,
    AppCategoriesComponent,
    // AppCoursesComponent,
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
  
