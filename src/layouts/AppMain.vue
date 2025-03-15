<script>
import Navbar from '@/components/common/Navbar.vue';
import Carousel from '@/components/main/Carousel.vue';
import Services from '@/components/main/Services.vue';
import About from '@/components/main/About.vue';
import Categories from '@/components/main/Categories.vue';
import Courses from '@/components/main/Courses.vue';
import Team from '@/components/main/Team.vue';
import Testimonials from '@/components/main/Testimonials.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'AppMain',
  components: {
    Navbar,
    Carousel,
    Services,
    About,
    Categories,
    Courses,
    Team,
    Testimonials,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <Carousel />
    <Services />
    <About />
    <Categories />
    <Courses />
    <Team />
    <Testimonials />
    <Footer />
  </div>
</template>

<style scoped>
/* Додайте стилі для головної сторінки, якщо потрібно */
</style>
