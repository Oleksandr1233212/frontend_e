<template>
  <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
      <div class="text-center">
        <h6 class="section-title bg-white text-center text-primary px-3">Testimonial</h6>
        <h1 class="mb-5">Our Students Say!</h1>
      </div>
      <!-- <Carousel :autoplay="2000" :loop="true" :itemsToShow="1" :nav="false" :smartSpeed="1000">
        <Slide v-for="(testimonial, index) in testimonials" :key="index"> -->
          <div class="testimonial-item text-center" v-if="this.aboba==1">
            <img class="border rounded-circle p-2 mx-auto mb-3" :src="first.src" style="width: 80px; height: 80px;">
            <h5 class="mb-0">{{ first.name }}</h5>
            <p>{{ first.profession }}</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">{{ first.text }}</p>
            </div>
          </div>
          <div class="testimonial-item text-center" v-if="this.aboba==2">
            <img class="border rounded-circle p-2 mx-auto mb-3" :src="second.src" style="width: 80px; height: 80px;">
            <h5 class="mb-0">{{ second.name }}</h5>
            <p>{{ second.profession }}</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">{{ second.text }}</p>
            </div>
          </div>
          <div class="testimonial-item text-center" v-if="this.aboba==3">
            <img class="border rounded-circle p-2 mx-auto mb-3" :src="third.src" style="width: 80px; height: 80px;">
            <h5 class="mb-0">{{ third.name }}</h5>
            <p>{{ third.profession }}</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">{{ third.text }}</p>
            </div>
          </div>
          <div class="testimonial-item text-center" v-if="this.aboba==0">
            <img class="border rounded-circle p-2 mx-auto mb-3" :src="fourth.src" style="width: 80px; height: 80px;">
            <h5 class="mb-0">{{ fourth.name }}</h5>
            <p>{{ fourth.profession }}</p>
            <div class="testimonial-text bg-light text-center p-4">
              <p class="mb-0">{{ fourth.text }}</p>
            </div>
          </div>
        <!-- </Slide>
      </Carousel> -->
    </div>
  </div>
</template>

<script>

// import {Carousel, Slide} from 'vue3-carousel';
import axios from 'axios'
import first from '@/assets/img/testimonial-1.jpg'
import second from '@/assets/img/testimonial-2.jpg'
import third from '@/assets/img/testimonial-3.jpg'
import fourth from '@/assets/img/testimonial-4.jpg'

import API_UR from '@/services/apiService'
const API_URL = API_UR.BACKEND_API_URL
export default {
  name: 'AppTestimonialsComponent',
  components: {
    // Carousel,
    // Slide
  },
  data() {
    return {
      // testimonials: [
      //   {
      //     img: require('../../img/testimonial-1.jpg'),
      //     name: 'Client Name',
      //     profession: 'Profession',
      //     text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
      //   },
      //   {
      //     img: require('../../img/testimonial-2.jpg'),
      //     name: 'Client Name',
      //     profession: 'Profession',
      //     text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
      //   },
      //   {
      //     img: require('../../img/testimonial-3.jpg'),
      //     name: 'Client Name',
      //     profession: 'Profession',
      //     text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
      //   },
      //   {
      //     img: require('../../img/testimonial-4.jpg'),
      //     name: 'Client Name',
      //     profession: 'Profession',
      //     text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
      //   }
      // ],
      first:{
        src:'',
        name:'',
        profession:'',
        text:''
      },
      second:{
        src:'',
        name:'',
        profession:'',
        text:''
      },
      third:{
        src:'',
        name:'',
        profession:'',
        text:''
      },
      fourth:{
        src:'',
        name:'',
        profession:'',
        text:''
      },
      aboba:''
    }
  },
  methods:{
    async testim(){
      try{
        const { data: testimonials } = await axios.get(API_URL + '/testim');
        console.log(testimonials)
        testimonials.forEach(category => {
          switch (category.number) {
            case 1:
              this.first = {
                src: first,
                name: category.name,
                profession: category.proff,
                text: category.text
              };
              break;
            case 2:
            this.second = {
                src: second,
                name: category.name,
                profession: category.proff,
                text: category.text
              };
              break;
            case 3:
            this.third = {
                src: third,
                name: category.name,
                profession: category.proff,
                text: category.text
              };
              break;
            case 4:
            this.fourth = {
                src: fourth,
                name: category.name,
                profession: category.proff,
                text: category.text
              };
              break;
            default:
              console.error('Unknown category number:', category.number);
          }
        });

      }catch(error){
        console.log('afrgagas')
      }
    },
    async Random(max){
      return Math.floor(Math.random() * max);
    }
  },
  created(){
    this.testim()
    this.aboba=Math.floor(Math.random()*4)
    console.log(this.aboba)
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
