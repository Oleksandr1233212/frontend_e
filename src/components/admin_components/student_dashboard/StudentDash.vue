<template>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <title>Preskool - Dashboard</title>

    </head>

    <body>

        <div class="main-wrapper">







            <div class="page-wrapper">
                <div class="content container-fluid">

                    <div class="page-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-sub-header">
                                    <h3 class="page-title">Welcome Bruklin!</h3>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active">Student</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hed />
                    <side />

                    <overview />
                    <div class="row">
                        <div class="col-12 col-lg-12 col-xl-8">
                            <lesson />
                            <div class="row">
                                <div class="col-12 col-lg-12 col-xl-12 d-flex">
                                    <div class="card flex-fill comman-shadow">
                                        <div class="card-header">
                                            <div class="row align-items-center">
                                                <div class="col-6">
                                                    <h5 class="card-title">Learning Activity</h5>
                                                </div>
                                                <div class="col-6">
                                                    <ul class="chart-list-out">
                                                        <li><span class="circle-blue"></span>Teacher</li>
                                                        <li><span class="circle-green"></span>Student</li>
                                                        <li class="star-menus"><a href="javascript:;"><i
                                                                    class="fas fa-ellipsis-v"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div id="apexcharts-area"></div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <hist /> 
                        </div>
                        <calen />
                    </div>
                    

                </div>

                <fot />

            </div>

        </div>

    </body>
</template>
<script>
import hed from '../HeaderComp.vue'
import side from '../SidebarComp.vue'
import overview from './Overview.vue'
import fot from '../FooterComp.vue'
import lesson from './LessonComp.vue'
import calen from '../CalendarComp.vue'
import hist from '../TeachingHistComp.vue'
export default {
    name: 'student',
    components: {
        hed,
        side,
        overview,
        fot,
        lesson,
        calen,
        hist
    }
}
</script>