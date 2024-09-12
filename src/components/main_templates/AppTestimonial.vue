<script>
import Navbar from './main_components/Navbar.vue'
import Headerr from './main_components/Header.vue'
import Foter from './main_components/Footer.vue'
import Testimonial from './main_components/Testimonials.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Foter,
    Headerr,
    Testimonial
   
  }
};
</script>
<template>

<head>
    <meta charset="utf-8">
    <title>eLEARNING - eLearning HTML Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

   
</head>

<body>
    <!-- Spinner Start -->
    <!-- <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div> -->
    <!-- Spinner End -->


    <!-- Navbar Start -->
   <Navbar />
    <!-- Navbar End -->


    <!-- Header Start -->
   <Headerr />
    <!-- Header End -->


    <!-- Testimonial Start -->
    <Testimonial />
    <!-- Testimonial End -->
        

    <!-- Footer Start -->
    <Foter />
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>


    <!-- JavaScript Libraries -->
    


</body>

</template>