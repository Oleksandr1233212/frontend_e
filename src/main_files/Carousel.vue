<template>
  <div class="container-fluid p-0 mb-5">
    <Carousel :autoplay="2000" :loop="true" :itemsToShow="1" :nav="false" :smartSpeed="1000">
      <Slide v-for="(image, index) in images" :key="index">
        <img class="img-fluid" :src="image.src" alt="">
        <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(24, 29, 56, .7);">
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-sm-10 col-lg-8">
                <h5 class="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                <h1 class="display-3 text-white animated slideInDown">{{ image.title }}</h1>
                <p class="fs-5 text-white mb-4 pb-2">{{ image.description }}</p>
                <router-link :to='`/about`'><button class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</button></router-link>
                <router-link :to="`/contact`"><button class="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</button></router-link>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';

export default {
  name: 'AppCarouselComponent',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      images: [
        {
          src: require('@/img/carousel-1.jpg'),
          title: 'The Best Online Learning Platform',
          description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.'
        },
        {
          src: require('@/img/carousel-2.jpg'),
          title: 'Get Educated Online From Your Home',
          description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.carousel__item img {
  width: 100%;
  height: auto;
}
.position-absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.start-0 {
  left: 0;
}
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.justify-content-start {
  justify-content: flex-start;
}
.col-sm-10, .col-lg-8 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col-sm-10 {
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}
.col-lg-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}
.text-primary {
  color: #007bff !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.slideInDown {
  animation-name: slideInDown;
}
.display-3 {
  font-size: 4.5rem;
}
.text-white {
  color: #fff !important;
}
.fs-5 {
  font-size: 1.25rem;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.pb-2 {
  padding-bottom: .5rem !important;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.py-md-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.px-md-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}
.me-3 {
  margin-right: 1rem !important;
}
.slideInLeft {
  animation-name: slideInLeft;
}
.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.slideInRight {
  animation-name: slideInRight;
}
</style>
