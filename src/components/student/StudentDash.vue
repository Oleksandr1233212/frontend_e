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
                                <act />
                                
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
import hed from '@/components/common/HeaderComp.vue'
import side from '@/components/common/StudentSidebar.vue'
import overview from '@/components/common/Overview.vue'
import fot from '@/components/common/FooterComp.vue'
import lesson from '@/components/common/LessonComp.vue'
import calen from '@/components/common/CalendarComp.vue'
import hist from '@/components/common/TeachingHistComp.vue'
import act from '@/components/common/LearningActivityComp.vue'
export default {
    name: 'student',
    components: {
        hed,
        side,
        overview,
        fot,
        lesson,
        calen,
        hist,
        act
    }
}
</script>