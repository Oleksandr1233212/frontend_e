<template>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <title>Preskool - Students</title>

        <link rel="shortcut icon" href="assets/img/favicon.png">

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
                            <div class="col-sm-12">
                                <div class="page-sub-header">
                                    <h3 class="page-title">Edit Students</h3>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="students.html">Student</a></li>
                                        <li class="breadcrumb-item active">Edit Students</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card comman-shadow">
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-12">
                                                <h5 class="form-title student-info">Student Information <span><a
                                                            href="javascript:;"><i
                                                                class="feather-more-vertical"></i></a></span></h5>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>First Name <span class="login-danger">*</span></label>
                                                    <input v-model="student.firstName" class="form-control" type="text" value="John Doe">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Last Name <span class="login-danger">*</span></label>
                                                    <input v-model="student.lastName" class="form-control" type="text" value="Stephen">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Gender <span class="login-danger">*</span></label>
                                                    <select class="form-control select">
                                                        <option>Select Gender</option>
                                                        <option>Female</option>
                                                        <option>Male</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms calendar-icon">
                                                    <label>Date Of Birth <span class="login-danger">*</span></label>
                                                    <input class="form-control datetimepicker" type="text"
                                                        placeholder="DD-MM-YYYY">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Roll </label>
                                                    <input class="form-control" type="text" value="12450687">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Blood Group <span class="login-danger">*</span></label>
                                                    <select class="form-control select">
                                                        <option>Please Select Group </option>
                                                        <option>B+</option>
                                                        <option>A+</option>
                                                        <option>O+</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Religion <span class="login-danger">*</span></label>
                                                    <select class="form-control select">
                                                        <option>Please Select Religion </option>
                                                        <option>Hindu</option>
                                                        <option>Christian</option>
                                                        <option>Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>E-Mail <span class="login-danger">*</span></label>
                                                    <input v-model="student.email" class="form-control" type="text" value="example@gmail.com">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Class <span class="login-danger">*</span></label>
                                                    <select class="form-control select">
                                                        <option>Please Select Class </option>
                                                        <option>12</option>
                                                        <option>11</option>
                                                        <option>10</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Section <span class="login-danger">*</span></label>
                                                    <select class="form-control select">
                                                        <option>Please Select Section </option>
                                                        <option>B</option>
                                                        <option>A</option>
                                                        <option>C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Admission ID </label>
                                                    <input class="form-control" type="text" value="1426539">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Phone </label>
                                                    <input class="form-control" type="text" value="+1 888 888 8888">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group students-up-files">
                                                    <label>Upload Student Photo (150px X 150px)</label>
                                                    <div class="uplod">
                                                        <label class="file-upload image-upbtn mb-0">
                                                            Choose File <input type="file">
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="student-submit">
                                                    <button type="submit" @click='updateStudent()' class="btn btn-primary btn-block">Submit</button>
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
      student: {
        firstName: "",
        lastName: "",
        email: "",
        
      },
      
    };
  },
  methods: {
    async updateStudent() {
      if (!this.student.email) {
        this.error = "Email is required!";
        return;
      }
      try {
        const response = await axios.post(API_URL+'/students/upd', this.student);
        if(response){
            alert(' Ne Problem bro')
            this.student= {
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