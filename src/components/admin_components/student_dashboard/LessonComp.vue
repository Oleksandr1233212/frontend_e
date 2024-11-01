<template>
    <div class="card flex-fill comman-shadow">
        <div class="card-header">
            <div class="row align-items-center">
                <div class="col-6">
                    <h5 class="card-title">Today’s Lesson</h5>
                </div>
                <div class="col-6">
                    <ul class="chart-list-out">
                        <li><span class="circle-blue"></span><span class="circle-gray"></span><span
                                class="circle-gray"></span>
                        </li>
                        <li class="lesson-view-all"><a href="#">View All</a></li>
                        <li class="star-menus"><a href="javascript:;"><i class="fas fa-ellipsis-v"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="dash-circle">
            <div class="row">
                <div class="col-lg-3 col-md-3 dash-widget1">
                    <div class="circle-bar circle-bar2">
                        <div class="circle-graph2" data-percent="0.8">
                            <div class="progress-text">
                                <b>80%</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="dash-details">
                        <div class="lesson-activity">
                            <div class="lesson-imgs">
                                <img :src="photo1" alt="">
                            </div>
                            <div class="views-lesson">
                                <h5>Class</h5>
                                <h4>Electrical Engg</h4>
                            </div>
                        </div>
                        <div class="lesson-activity">
                            <div class="lesson-imgs">
                                <img :src="photo2" alt="">
                            </div>
                            <div class="views-lesson">
                                <h5>Lessons</h5>
                                <h4>5 Lessons</h4>
                            </div>
                        </div>
                        <div class="lesson-activity">
                            <div class="lesson-imgs">
                                <img :src="photo3" alt="">
                            </div>
                            <div class="views-lesson">
                                <h5>Time</h5>
                                <h4>Lessons</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="dash-details">
                        <div class="lesson-activity">
                            <div class="lesson-imgs">
                                <img :src="photo4" alt="">
                            </div>
                            <div class="views-lesson">
                                <h5>Asignment</h5>
                                <h4>5 Asignment</h4>
                            </div>
                        </div>
                        <div class="lesson-activity">
                            <div class="lesson-imgs">
                                <img :src="photo5" alt="">
                            </div>
                            <div class="views-lesson">
                                <h5>Staff</h5>
                                <h4>John Doe</h4>
                            </div>
                        </div>
                        <div class="lesson-activity">
                            <div class="lesson-imgs">
                                <img :src="photo6" alt="">
                            </div>
                            <div class="views-lesson">
                                <h5>Lesson Learned</h5>
                                <h4>10/50</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-center justify-content-center">
                    <div class="skip-group">
                        <button type="submit" class="btn btn-info skip-btn">skip</button>
                        <button type="submit" class="btn btn-info continue-btn">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import $ from 'jquery'
import photo1 from '@/img/lesson-icon-01.svg'
import photo2 from '@/img/lesson-icon-02.svg'
import photo3 from '@/img/lesson-icon-03.svg'
import photo4 from '@/img/lesson-icon-04.svg'
import photo5 from '@/img/lesson-icon-05.svg'
import photo6 from '@/img/lesson-icon-06.svg'
export default {
    name: 'overview',
    data() {
        return {
            photo1,
            photo2,
            photo3,
            photo4,
            photo5,
            photo6
        }
    },
    mounted() {
        this.initCircle();
    },
    methods: {
        initCircle() {
            const percent = $('.circle-graph2').data('percent');
            $('.circle-graph2').circleProgress({
                value: percent,
                size: 140,
                thickness: 10,
                fill: {
                    color: '#007bff' // Цвет заполнения круга
                },
                startAngle: -Math.PI / 2, // Начало анимации с верха
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.progress-text b').text(Math.round(80 * progress) + '%');
            });
        }
    }
}
</script>
<style scoped>
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

.circle-graph2 {
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
    text-align: center;
}

.lesson-activity {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.lesson-imgs {
    margin-right: 10px;
}

.lesson-imgs img {
    width: 40px; /* ширина иконки */
    height: auto;
}
</style>