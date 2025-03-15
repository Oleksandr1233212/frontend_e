<template>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 class="mb-5">Popular Courses</h1>
            </div>
            <div class="row g-4 justify-content-center">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="course-item bg-light">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid" :src="first.src" alt="">
                            <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Read More</a>
                                <router-link :to='`/register`'><a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Join Now</a></router-link>
                            </div>
                        </div>
                        <div class="text-center p-4 pb-0">
                            <h3 class="mb-0">${{first.price}}.00</h3>
                            <div class="mb-3">
                                <small v-for="n in first.otziv" :key="n" class="fa fa-star text-primary"></small>

                                <small>({{first.amount}})</small>
                            </div>
                            <h5 class="mb-4">{{first.name}}</h5>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>{{first.uchitel}}</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>{{first.time}} Hrs</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>{{first.student}} Students</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="course-item bg-light">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid" :src="second.src" alt="">
                            <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Read More</a>
                                <router-link :to='`/register`'><a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Join Now</a></router-link>
                            </div>
                        </div>
                        <div class="text-center p-4 pb-0">
                            <h3 class="mb-0">${{second.price}}.00</h3>
                            <div class="mb-3">
                                <small v-for="n in second.otziv" :key="n" class="fa fa-star text-primary"></small>

                                <small>({{second.amount}})</small>
                            </div>
                            <h5 class="mb-4">{{second.name}}</h5>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>{{second.uchitel}}</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>{{second.time}} Hrs</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>{{second.student}} Students</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="course-item bg-light">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid" :src="third.src" alt="">
                            <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Read More</a>
                                <router-link :to='`/register`'><a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Join Now</a></router-link>
                            </div>
                        </div>
                        <div class="text-center p-4 pb-0">
                            <h3 class="mb-0">${{third.price}}.00</h3>
                            <div class="mb-3">
                                <small v-for="n in third.otziv" :key="n" class="fa fa-star text-primary"></small>

                                <small>({{third.amount}})</small>
                            </div>
                            <h5 class="mb-4">{{third.name}}</h5>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>{{third.uchitel}}</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>{{third.time}} Hrs</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>{{third.student}} Students</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </template>
  
  <script>
  import axios from 'axios'
import first from '@/assets/img/course-1.jpg'
import second from '@/assets/img/course-2.jpg'
import third from '@/assets/img/course-3.jpg'

import apiService from '@/services/apiService'

export default {
    name: 'AppFooterComponent',
    components: {},
    data(){
        return{
            first: {
                src: '',
                name:'',
                price:'',
                otziv:'',
                amount:'',
                student:'',
                time:'',
                uchitel:''
            },
            second: {
                src: '',
                name:'',
                price:'',
                otziv:'',
                amount:'',
                student:'',
                time:'',
                uchitel:''
            },
            third: {
                src: '',
                name:'',
                price:'',
                otziv:'',
                amount:'',
                student:'',
                time:'',
                uchitel:''
            }
        }
    },
    methods: {
        async findCource(){
            try{
                
                const { data: categories } = await apiService.get('/api/cources');
                console.log(categories)
                categories.forEach(category => {
          switch (category.number) {
            case 1:
              this.first = {
                src: first,
                name: category.name,
                
                price: category.price,
                otziv:category.otziv,
                amount: category.amount,
                
                student:category.student,
                time:category.time,
                uchitel:category.uchitel
              };
              break;
            case 2:
              this.second = {
                src: second,
                name: category.name,
                
                price: category.price,
                otziv:category.otziv,
                amount:category.amount,
                student:category.student,
                time:category.time,
                uchitel:category.uchitel
              };
              break;
            case 3:
              this.third = {
                src: third,
                name: category.name,
                
                price: category.price,
                otziv:category.otziv,
                amount:category.amount,
                student:category.student,
                time:category.time,
                uchitel:category.uchitel
              };
              break;
            
              
            default:
              console.error('Unknown category number:', category.number);
          }
        });
        

            }catch(error){
                console.log('errore')
            }
        }
    },
    created(){
    this.findCource()
  }
  };
  </script>
  
  <style scoped>
  /* Додайте свої стилі тут */
  </style>
  
  