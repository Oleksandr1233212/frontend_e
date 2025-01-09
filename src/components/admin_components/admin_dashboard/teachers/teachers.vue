<template>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <title>Preskool - Teachers</title>

        <link rel="shortcut icon" href="@/img/favicon.png">

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
                                <h3 class="page-title">Teachers</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Teachers</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="student-group-form">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search by ID ...">
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search by Name ...">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search by Phone ...">
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="search-student-btn">
                                    <button  class="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card card-table">
                                <div class="card-body">

                                    <div class="page-header">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h3 class="page-title">Teachers</h3>
                                            </div>
                                            <div class="col-auto text-end float-end ms-auto download-grp">
                                                <a href="teachers.html" class="btn btn-outline-gray me-2 active"><i
                                                        class="feather-list"></i></a>
                                                <a href="teachers-grid.html" class="btn btn-outline-gray me-2"><i
                                                        class="feather-grid"></i></a>
                                                <a href="#" class="btn btn-outline-primary me-2"><i
                                                        class="fas fa-download"></i> Download</a>
                                                <a href="add-teacher.html" class="btn btn-primary"><i
                                                        class="fas fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="table-responsive">
                                        <table
                                            class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                                            <thead class="student-thread">
                                                <tr>
                                                    <th>
                                                        <div class="form-check check-tables">
                                                            <input class="form-check-input" type="checkbox"
                                                                value="something">
                                                        </div>
                                                    </th>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Class</th>
                                                    <th>Gender</th>
                                                    <th>Subject</th>
                                                    <th>Section</th>
                                                    <th>Mobile Number</th>
                                                    <th>Address</th>
                                                    <th class="text-end">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(teacher, index) in teachers" :key="teacher._id || index">
                                                    
                                                    <td>{{ teacher || 'No First Name' }}</td>
                                                    
                                                    <td class="text-end">
                                                        <button class="btn btn-sm btn-primary"
                                                            @click="editStudent(student.id)">Edit</button>
                                                        <button class="btn btn-sm btn-danger"
                                                            @click="deleteStudent(student.id)">Delete</button>
                                                    </td>
                                                </tr>
                                                <tr v-if="!students">
                                                    <td colspan="8" class="text-center">No students found.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <footer>
                    <p>Copyright © 2022 Dreamguys.</p>
                </footer>

            </div>

        </div>


        
    </body>

</template>
<script>
import Headd from "../../HeaderComp.vue";
import Side from "../../SidebarComp.vue";
import axios from "axios";
import API_UR from "@/services/apiService";
const API_URL = API_UR.BACKEND_API_URL
export default {
    name: "student-list",
    components: { Headd, Side },
    data() {
        return {
            teachers: {},
            searchID: "",
            searchName: "",
            searchPhone: "",
        };
    },
    methods: {
        async fetchStudents() {
            try {
                const response = await axios.get(`${API_URL}/teachers`);

                this.teachers = response.data
                console.log(this.teachers)
            } catch (error) {
                console.error("Failed to fetch students:", error);
            }
        },
        editStudent(id) {
            this.$router.push(`/edit-student/${id}`);
        },
        async deleteStudent(id) {
            try {
                await axios.delete(`${API_URL}/students/${id}`);
                this.fetchStudents();
            } catch (error) {
                console.error("Failed to delete student:", error);
            }
        },
    },
    mounted() {
        this.fetchStudents();
    },
};
</script>