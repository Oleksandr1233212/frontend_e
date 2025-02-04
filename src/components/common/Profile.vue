<template>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <title>Preskool - Profile</title>


    </head>

    <body>

        <div class="main-wrapper">

            <heads />
            <side />


            


            <div class="page-wrapper">
                <div class="content container-fluid">

                    <div class="page-header">
                        <div class="row">
                            <div class="col">
                                <h3 class="page-title">Profile</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a >Dashboard</a></li>
                                    <li class="breadcrumb-item active">Profile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <mainq />

                    <div class="row">
                        <div class="col-md-12">
                            
                            <div class="profile-menu">
                                <ul class="nav nav-tabs nav-tabs-solid">
                                    <li class="nav-item">
                                        <button class="nav-link active" @click="this.change()">About</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="nav-link" @click="this.change()">Password</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content profile-tab-cont">
                                <abot v-if="this.change=='about'" />
                                <pass v-if="this.change=='pass'" />

                                


                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </body>
</template>
<script>
import side from '@/components/common/SidebarComp.vue'
import heads from '@/components/common/HeaderComp.vue'
import mainq from '@/components/common/ProfMainComp.vue'
import abot from '@/components/common/AboutComp.vue'
import pass from '@/components/common/ChangePassComp.vue'
export default {
    name:'prof',
    components:{
        side, 
        heads,
        mainq,
        abot,
        pass
    },
    data(){
        return {
            change: 'about'
        }
    },
    methods:{
        change(){
            switch(this.change){
                case 'about':
                    this.change='pass'
                    break;
                case 'pass':
                    this.change='about'
                    break;
            }
        }

    }
}
</script>