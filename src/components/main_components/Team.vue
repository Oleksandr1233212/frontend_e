<template>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">Instructors</h6>
        <h1 class="mb-5">Expert Instructors</h1>
      </div>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-item bg-light">
            <div class="overflow-hidden">
              <img class="img-fluid" :src="first.src" alt="">
            </div>
            <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">{{first.name}}</h5>
              <small>{{first.designation}}</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="team-item bg-light">
            <div class="overflow-hidden">
              <img class="img-fluid" :src="second.src" alt="">
            </div>
            <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">{{second.name}}</h5>
              <small>{{second.designation}}</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="team-item bg-light">
            <div class="overflow-hidden">
              <img class="img-fluid" :src="third.src" alt="">
            </div>
            <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">{{third.name}}</h5>
              <small>{{third.designation}}</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div class="team-item bg-light">
            <div class="overflow-hidden">
              <img class="img-fluid" :src="fourth.src" alt="">
            </div>
            <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">{{fourth.name}}</h5>
              <small>{{fourth.designation}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import first from '@/img/team-1.jpg'
import second from '@/img/team-2.jpg'
import third from '@/img/team-3.jpg'
import fourth from '@/img/team-4.jpg'
import API_UR from '@/services/apiService'
const API_URL = API_UR.BACKEND_API_URL
export default {
  name: 'AppTeamComponent',
  components:{},
  data(){
    return{
      first: {
        src:'',
        name:'',
        designation:''
      },
      second: {
        src:'',
        name:'',
        designation:''
      },
      third: {
        src:'',
        name:'',
        designation:''
      },
      fourth: {
        src:'',
        name:'',
        designation:''
      },
    }
  },
  methods:{
    async teamSerch(){
      try{
        const { data: categories } = await axios.get(API_URL + '/team');
        console.log(categories)
        categories.forEach(category => {
          switch (category.number) {
            case 1:
              this.first = {
                src: first,
                name: category.name,
                designation:category.desig
              };
              break;
            case 2:
            this.second = {
                src: second,
                name: category.name,
                designation:category.desig
              };
              break;
            case 3:
            this.third = {
                src: third,
                name: category.name,
                designation:category.desig
              };
              break;
            case 4:
            this.fourth = {
                src: fourth,
                name: category.name,
                designation:category.desig
              };
              break;
            default:
              console.error('Unknown category number:', category.number);
          }
        });

      } catch(error){
        console.log('rrrr')
      }
    }
  },
  created(){
    this.teamSerch()
  }
};
</script>

<style scoped>
/* Додайте свої стилі тут */
</style>
