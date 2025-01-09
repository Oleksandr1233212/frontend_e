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
                                    <h3 class="page-title">Add Students</h3>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="students.html">Student</a></li>
                                        <li class="breadcrumb-item active">Add Students</li>
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
                                                    <input v-model="studentData.firstName" class="form-control" type="text"
                                                        placeholder="Enter First Name">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Last Name <span class="login-danger">*</span></label>
                                                    <input v-model="studentData.lastName" class="form-control" type="text"
                                                        placeholder="Enter First Name">
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
                                                    <input class="form-control" type="text"
                                                        placeholder="Enter Roll Number">
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
                                                    <input v-model="studentData.email" class="form-control" type="text"
                                                        placeholder="Enter Email Address">
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
                                                    <input class="form-control" type="text"
                                                        placeholder="Enter Admission ID">
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4">
                                                <div class="form-group local-forms">
                                                    <label>Phone </label>
                                                    <input class="form-control" type="text"
                                                        placeholder="Enter Phone Number">
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
                                                    <button type="button" @click='addStudent()'class="btn btn-primary btn-block">Submit</button>
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
import Headd from '../../HeaderComp.vue';
import Side from '../../SidebarComp.vue';
import axios from 'axios';
import API_UR from '@/services/apiService';
const API_URL = API_UR.BACKEND_API_URL

export default {
  name: 'add-student',
  components: {
    Headd,
    Side,
  },
  data() {
    return {
      studentData: {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        roll: '',
        bloodGroup: '',
        religion: '',
        email: '',
        class: '',
        section: '',
        admissionId: '',
        phone: '',
      },
    };
  },
  methods: {
    async addStudent() {
      if (!this.studentData.firstName || !this.studentData.lastName || !this.studentData.email) {
        alert('Please fill all required fields!');
        return;
      }

      try {
        const response = await axios.post(API_URL+'/students', this.studentData);
        if (response.status === 200) {
          console.log('Student added successfully!');
          this.studentData = {
            firstName: '',
            lastName: '',
            gender: '',
            dateOfBirth: '',
            roll: '',
            bloodGroup: '',
            religion: '',
            email: '',
            class: '',
            section: '',
            admissionId: '',
            phone: '',
          };
        }
      } catch (error) {
        console.error('Error adding student:', error);
        alert('Failed to add student. Please try again later.');
      }
    },
  },
};
</script>