<template>

<div class="row">
                        <div class="col-xl-3 col-sm-6 col-12 d-flex">
                            <div class="card bg-comman w-100">
                                <div class="card-body">
                                    <div class="db-widgets d-flex justify-content-between align-items-center">
                                        <div class="db-info">
                                            <h6>Total Classes</h6>
                                            <h3>04/06</h3>
                                        </div>
                                        <div class="db-icon">
                                            <img :src="photo1" alt="Dashboard Icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12 d-flex">
                            <div class="card bg-comman w-100">
                                <div class="card-body">
                                    <div class="db-widgets d-flex justify-content-between align-items-center">
                                        <div class="db-info">
                                            <h6>Total Students</h6>
                                            <h3>40/60</h3>
                                        </div>
                                        <div class="db-icon">
                                            <img :src="photo" alt="Dashboard Icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12 d-flex">
                            <div class="card bg-comman w-100">
                                <div class="card-body">
                                    <div class="db-widgets d-flex justify-content-between align-items-center">
                                        <div class="db-info">
                                            <h6>Total Lessons</h6>
                                            <h3>30/50</h3>
                                        </div>
                                        <div class="db-icon">
                                            <img :src="photo2" alt="Dashboard Icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12 d-flex">
                            <div class="card bg-comman w-100">
                                <div class="card-body">
                                    <div class="db-widgets d-flex justify-content-between align-items-center">
                                        <div class="db-info">
                                            <h6>Total Hours</h6>
                                            <h3>15/20</h3>
                                        </div>
                                        <div class="db-icon">
                                            <img :src="photo3" alt="Dashboard Icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</template>
<script>
import photo1 from '@/assets/img/teacher-icon-01.svg'
import photo2 from '@/assets/img/teacher-icon-02.svg'
import photo3 from '@/assets/img/teacher-icon-03.svg'
import photo from '@/assets/img/dash-icon-01.svg'

export default {
    name: 'overview',
    data(){
        return{
            photo1,
            photo2,
            photo3,
            photo
        }
    }
}
</script>