<template>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <title>Preskool - Teachers</title>

        <link rel="shortcut icon" href="@/assets/img/favicon.png">

        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap"
            rel="stylesheet">

        
    </head>

    <body>

        <div class="main-wrapper">

            <Headd />
           <Side />


            


            <div class="page-wrapper">
                <div class="content container-fluid">

                    <div class="page-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="page-title">Edit Teachers</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="teachers.html">Teachers</a></li>
                                    <li class="breadcrumb-item active">Edit Teachers</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-12">
                                                <h5 class="form-title"><span>Basic Details</span></h5>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Teacher ID <span class="login-danger">*</span></label>
                                                    <input type="text" class="form-control" value="PRE1234">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Name <span class="login-danger">*</span></label>
                                                    <input v-model="this.teacher.firstName" type="text" class="form-control" value="Vincent">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Gender <span class="login-danger">*</span></label>
                                                    <select class="form-control select">
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms calendar-icon">
                                                    <label>Date Of Birth <span class="login-danger">*</span></label>
                                                    <input class="form-control datetimepicker" type="text"
                                                        placeholder="29-04-2022">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Mobile <span class="login-danger">*</span></label>
                                                    <input type="text" class="form-control" value="077 3499 9959">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms calendar-icon">
                                                    <label>Joining Date <span class="login-danger">*</span></label>
                                                    <input class="form-control datetimepicker" type="text"
                                                        placeholder="29-04-2022">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Qualification <span class="login-danger">*</span></label>
                                                    <input class="form-control" type="text"
                                                        value="Bachelor of Engineering">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Experience <span class="login-danger">*</span></label>
                                                    <input class="form-control" type="text" value="5">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <h5 class="form-title"><span>Login Details</span></h5>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Username <span class="login-danger">*</span></label>
                                                    <input type="text" class="form-control" value="Vincent">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Email ID <span class="login-danger">*</span></label>
                                                    <input v-model="this.teacher.email" type="email" class="form-control"
                                                        value="vincent20@gmail.com">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Password <span class="login-danger">*</span></label>
                                                    <input type="password" class="form-control" value="vincent">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Repeat Password <span class="login-danger">*</span></label>
                                                    <input type="password" class="form-control" value="vincent">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <h5 class="form-title"><span>Address</span></h5>
                                            </div>
                                            <div class="col-12 ">
                                                <div class="form-group local-forms">
                                                    <label>Address <span class="login-danger">*</span></label>
                                                    <input type="text" class="form-control" value="3979 Ashwood Drive">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>City <span class="login-danger">*</span></label>
                                                    <input type="text" class="form-control" value="Omaha">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>State <span class="login-danger">*</span></label>
                                                    <input type="text" class="form-control" value="Omaha">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Zip Code <span class="login-danger">*</span></label>
                                                    <input type="text" class="form-control" value="3979">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Country <span class="login-danger">*</span></label>
                                                    <input type="text" class="form-control" value="USA">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="student-submit">
                                                    <button type="submit" @click='updateTeach()' class="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        
    </body>

</template>
<script>
import Headd from "@/components/common/HeaderComp.vue";
import Side from "@/components/common/SidebarComp.vue";
import API_UR from "@/services/apiService";
import axios from "axios";
const API_URL = API_UR.BACKEND_API_URL
export default {
  name: "edit-student",
  components: { Headd, Side },
  data() {
    return {
      teacher: {
        firstName: "",
        lastName: "",
        email: "",
        
      },
      
    };
  },
  methods: {
    async updateTeach() {
      if (!this.teacher.email) {
        this.error = "Email is required!";
        return;
      }
      try {
        const response = await axios.post(`${API_URL}/students/upd`, this.teacher);
        if(response){
            alert(' Ne Problem bro')
            this.teacher= {
                firstName: "",
        lastName: "",
        email: "",

            }

        }
        
      } catch (error) {
        alert('Problema bro')
      }
    },
  },
};
</script>