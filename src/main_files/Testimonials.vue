<template>
  <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
      <div class="text-center">
        <h6 class="section-title bg-white text-center text-primary px-3">Testimonial</h6>
        <h1 class="mb-5">Our Students Say!</h1>
      </div>
      <Carousel :autoplay="2000" :loop="true" :itemsToShow="1" :nav="false" :smartSpeed="1000">
        <Slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-item text-center">
            <img class="border rounded-circle p-2 mx-auto mb-3" :src="testimonial.img" style="width: 80px; height: 80px;">
            <h5 class="mb-0">{{ testimonial.name }}</h5>
            <p>{{ testimonial.profession }}</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">{{ testimonial.text }}</p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue3-carousel';

export default {
  name: 'AppTestimonialsComponent',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      testimonials: [
        {
          img: require('@/img/testimonial-1.jpg'),
          name: 'Client Name',
          profession: 'Profession',
          text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        },
        {
          img: require('@/img/testimonial-2.jpg'),
          name: 'Client Name',
          profession: 'Profession',
          text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        },
        {
          img: require('@/img/testimonial-3.jpg'),
          name: 'Client Name',
          profession: 'Profession',
          text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        },
        {
          img: require('@/img/testimonial-4.jpg'),
          name: 'Client Name',
          profession: 'Profession',
          text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.testimonial-item {
  margin-bottom: 1.5rem;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.p-2 {
  padding: .5rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.text-center {
  text-align: center !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.text-primary {
  color: #007bff !important;
}

.bg-white {
  background-color: #fff !important;
}
</style>
