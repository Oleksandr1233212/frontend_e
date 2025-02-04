<template>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <title>Preskool - Dashboard</title>

        <link rel="shortcut icon" href="@/assets/img/favicon.png">


    </head>

    <body>

        <div class="main-wrapper">

            <hed />


            <side />


            <div class="page-wrapper">
                <div class="content container-fluid">

                    <div class="page-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-sub-header">
                                    <h3 class="page-title">Welcome Jonathan!</h3>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a>Home</a></li>
                                        <li class="breadcrumb-item active">Teacher</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <overview />


                    <div class="row">
                        <div class="col-12 col-lg-12 col-xl-8">
                            <div class="row">
                                <lesson />
                                <div class="col-4">
                <div class="card">
                  <h5 class="card-title">Semester Progress</h5>
                  <div class="dash-widget">
                    <div class="circle-bar">
                      <div class="circle-graph" data-percent="0.5">
                        <div class="progress-text">
                          <b>55/60</b>
                          <p>Lesson Progressed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                            </div>
                            <div class="row">
                                <ActivityComp />
                                <hist />
                            </div>
                        </div>
                        <calend />
                    </div>

                </div>

                <fot />

            </div>

        </div>



    </body>
</template>
<script>

// import $ from 'jquery'
// import fot from '@/components/common/FooterComp.vue'
// import hed from '@/components/common/HeaderComp.vue'
// import side from '@/components/common/TeacherSidebar.vue'
// import overview from '@/components/common/Overview.vue'
// import lesson from '@/components/common/LessonComp.vue'
// import hist from '@/components/common/TeachingHistComp.vue'
// import calend from '@/components/common/CalendarComp.vue'
// import ActivityComp from '@/components/common/LearningActivityComp.vue'
// export default {
//     name: 'teacher',
//     components: {
//         fot,
//         hed,
//         side,
//         overview,
//         lesson,
//         hist,
//         calend,
//         ActivityComp
//     },
//     mounted(){
//         this.circle
//     },
//     methods:{
//         circle(){
//             $(document).ready(function () {
//     $('.circle-graph').circleProgress({
//         value: $('.circle-graph').data('percent'),
//         size: 140,
//         thickness: 10,
//         fill: {
//             color: '#007bff' // цвет заполнения круга
//         },
//         startAngle: -Math.PI / 2, // Начало анимации с верха
//     }).on('circle-animation-progress', function (event, progress) {
//         $(this).find('.progress-text b').text(Math.round(55 + (60 - 55) * progress) + '/60');
//     });
// });
//         }
//     }
// }
// $(document).ready(function () {
//     $('.circle-graph').circleProgress({
//         value: $('.circle-graph').data('percent'),
//         size: 140,
//         thickness: 10,
//         fill: {
//             color: '#007bff' // цвет заполнения круга
//         },
//         startAngle: -Math.PI / 2, // Начало анимации с верха
//     }).on('circle-animation-progress', function (event, progress) {
//         $(this).find('.progress-text b').text(Math.round(55 * progress) + '/60');
//     });
// });
</script>
<style>
/* Основные стили для контейнера и текста */


.card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.card-title {
    font-size: 18px;
    margin-bottom: 20px;
    color: #333;
}

.circle-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 20px;
}

.circle-graph {
    position: relative;
}

.progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 16px;
    color: #333;
}

.progress-text b {
    font-size: 24px;
    font-weight: bold;
    display: block;
}

.progress-text p {
    margin: 0;
    font-size: 14px;
    color: #666;
}
</style>