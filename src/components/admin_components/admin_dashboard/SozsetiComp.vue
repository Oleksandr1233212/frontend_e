<template>
    <div class="row">
            <!-- Блок Facebook -->
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card flex-fill fb sm-box">
                <div class="social-likes">
                  <p>Like us on facebook</p>
                  <h6>50,095</h6>
                </div>
                <div class="social-boxs">
                  <img :src="socialIcon01" alt="Social Icon">
                </div>
              </div>
            </div>
            <!-- Блок Twitter -->
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card flex-fill twitter sm-box">
                <div class="social-likes">
                  <p>Follow us on twitter</p>
                  <h6>48,596</h6>
                </div>
                <div class="social-boxs">
                  <img :src="socialIcon02" alt="Social Icon">
                </div>
              </div>
            </div>
            <!-- Блок Instagram -->
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card flex-fill insta sm-box">


                <div class="social-likes">
                  <p>Follow us on instagram</p>
                  <h6>52,085</h6>
                </div>
                <div class="social-boxs">
                  <img :src="socialIcon03" alt="Social Icon">
                </div>
              </div>
            </div>
            <!-- Блок LinkedIn -->
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card flex-fill linkedin sm-box">
                <div class="social-likes">
                  <p>Follow us on linkedin</p>
                  <h6>69,050</h6>
                </div>
                <div class="social-boxs">
                  <img :src="socialIcon04" alt="Social Icon">
                </div>
              </div>
            </div>
          </div>
        
</template>
<script>
  import socialIcon01 from '@/img/social-icon-01.svg';
  import socialIcon02 from '@/img/social-icon-02.svg';
  import socialIcon03 from '@/img/social-icon-03.svg';
  import socialIcon04 from '@/img/social-icon-04.svg';
  export default {
    name:'sozseti',
    data(){
        return{
            socialIcon01,
            socialIcon02,
            socialIcon03,
            socialIcon04
        }
    }
  }
</script>