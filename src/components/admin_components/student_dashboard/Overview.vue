<template>

    <div class="row">
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card bg-comman w-100">
                <div class="card-body">
                    <div class="db-widgets d-flex justify-content-between align-items-center">
                        <div class="db-info">
                            <h6>All Courses</h6>
                            <h3>04/06</h3>
                        </div>
                        <div class="db-icon">
                            <img :src="icon1" alt="Dashboard Icon">
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
                            <h6>All Projects</h6>
                            <h3>40/60</h3>
                        </div>
                        <div class="db-icon">
                            <img :src="icon2" alt="Dashboard Icon">
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
                            <h6>Test Attended</h6>
                            <h3>30/50</h3>
                        </div>
                        <div class="db-icon">
                            <img :src="icon3" alt="Dashboard Icon">
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
                            <h6>Test Passed</h6>
                            <h3>15/20</h3>
                        </div>
                        <div class="db-icon">
                            <img :src="icon4" alt="Dashboard Icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import icon1 from '@/img/teacher-icon-01.svg'
import icon2 from '@/img/teacher-icon-02.svg'
import icon3 from '@/img/student-icon-01.svg'
import icon4 from '@/img/student-icon-02.svg'
export default {
    name: 'overview',
    data() {
        return {
            icon1,
            icon2,
            icon3,
            icon4
        }
    }


}
</script>