<template>
  <div class="carousel-container">
    <Carousel
      :autoplay="2000"
      :loop="true"
      :itemsToShow="1"
      :navigationEnabled="false"
      :transition="1000"
    >
      <Slide v-for="(image, index) in images" :key="index">
        <div class="slide-content">
          <img class="img-fluid" :src="image.src" :alt="image.alt" />
          <div class="overlay">
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-sm-10 col-lg-8">
                  <h5 class="text-primary text-uppercase mb-3 animated slideInDown">
                    Best Online Courses
                  </h5>
                  <h1 class="display-3 text-white animated slideInDown">
                    {{ image.title }}
                  </h1>
                  <p class="fs-5 text-white mb-4 pb-2">
                    {{ image.description }}
                  </p>
                  <router-link to="/about">
                    <button class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                      Read More
                    </button>
                  </router-link>
                  <router-link to="/contact">
                    <button class="btn btn-light py-md-3 px-md-5 animated slideInRight">
                      Join Now
                    </button>
                  </router-link>
                </div>
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
import 'vue3-carousel/dist/carousel.css'; // Імпортуємо стилі каруселі

// Імпортуємо зображення
import carousel1 from '@/assets/img/carousel-1.jpg';
import carousel2 from '@/assets/img/carousel-2.jpg';

export default {
  name: 'AppCarouselComponent',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        {
          src: carousel1,
          alt: 'Carousel Image 1',
          title: 'The Best Online Learning Platform',
          description:
            'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.',
        },
        {
          src: carousel2,
          alt: 'Carousel Image 2',
          title: 'Get Educated Online From Your Home',
          description:
            'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  margin-bottom: 5rem;
}

.slide-content {
  position: relative;
}

.slide-content img {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(24, 29, 56, 0.7);
  display: flex;
  align-items: center;
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

@keyframes slideInDown {
  from {
    transform: translateY(-100%);
    visibility: visible;
  }
  to {
    transform: translateY(0);
  }
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
  padding-bottom: 0.5rem !important;
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
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

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    visibility: visible;
  }
  to {
    transform: translateX(0);
  }
}

.slideInRight {
  animation-name: slideInRight;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    visibility: visible;
  }
  to {
    transform: translateX(0);
  }
}
</style>
