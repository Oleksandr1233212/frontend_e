<template>
  <div class="container-xxl py-5 category">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">Categories</h6>
        <h1 class="mb-5">Courses Categories</h1>
      </div>
      <div class="row g-3">
        <div class="col-lg-7 col-md-6">
          <div class="row g-3">
            <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img class="img-fluid" :src="categoriess.src" alt="">
                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1px;">
                  <h5 class="m-0" >{{ categoriess.name }}</h5>
                  <small class="text-primary" >{{ categoriess.amount }} Cources</small>
                </div>
              </a>
            </div>
            <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img class="img-fluid"  :src='categoriesf.src' alt="">
                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1px;">
                  <h5 class="m-0" >{{ categoriesf.name }}</h5>
                  <small class="text-primary" >{{ categoriesf.amount }} Cources</small>
                </div>
              </a>
            </div>
            <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img class="img-fluid"  :src="categoriesd.src" alt="">
                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1px;">
                  <h5 class="m-0" >{{ categoriesd.name }}</h5>
                  <small class="text-primary" >{{ categoriesd.amount }} Cources</small>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style="min-height: 350px;">
          <a class="position-relative d-block h-100 overflow-hidden" href="">
            <img class="img-fluid position-absolute w-100 h-100" :src="categoriesg.src" alt="" style="object-fit: cover;">
            <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin:  1px;">
              <h5 class="m-0" >{{ categoriesg.name }}</h5>
              <small class="text-primary" >{{ categoriesg.amount }} Cources</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cat1 from '@/img/cat-1.jpg'
import cat2 from '@/img/cat-2.jpg'
import cat3 from '@/img/cat-3.jpg'
import cat4 from '@/img/cat-4.jpg'
// const API_URL = "http://localhost:5040/api/taskmanagerapp";
import API_UR from '@/services/apiService'
const API_URL = API_UR.BACKEND_API_URL
console.log(API_URL)
export default {

  name: 'AppCategoriesComponent',
  components:{},
  data(){
    return {
      
      categoriess: {
        src: cat1,
        name: '',
        amount:''

      },
      categoriesf: {
        src: '',
        name: '',
        amount:''

      },
      categoriesd: {
        src: '',
        name: '',
        amount:''

      },
      categoriesg: {
        src: '',
        name: '',
        amount:''

      }

    }
  },
  methods:{
    async findCategories(){
      try{
        
        const { data: categories } = await axios.get(API_URL + '/courses');
        console.log(categories)
        categories.forEach(category => {
          switch (category.number) {
            case 1:
              this.categoriess = {
                src: cat1,
                name: category.name,
                amount: category.amount,
              };
              break;
            case 2:
              this.categoriesf = {
                src: cat2,
                name: category.name,
                amount: category.amount,
              };
              break;
            case 3:
              this.categoriesd = {
                src: cat3,
                name: category.name,
                amount: category.amount,
              };
              break;
            case 4:
              this.categoriesg = {
                src: cat4,
                name: category.name,
                amount: category.amount,
              };
              break;
            default:
              console.error('Unknown category number:', category.number);
          }
        });
        
              
            
              
            
              
            
              
          
        


      }catch(error){
        console.log('error')
      }
    }

  },
  created(){
    this.findCategories()
    

    

  }

};
</script>

<style scoped>
/* Додайте свої стилі тут */
</style>
