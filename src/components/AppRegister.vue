<template>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <title>Preskool - Register</title>

    <!-- <link rel="shortcut icon" href="assets/img/favicon.png">

<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">

<link rel="stylesheet" href="assets/plugins/feather/feather.css">

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css">
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css">

<link rel="stylesheet" href="assets/css/style.css"> -->
</head>

<body>

    <div class="main-wrapper login-body">
        <div class="login-wrapper">
            <div class="container">
                <div class="loginbox">
                    <div class="login-left">
                        <img class="img-fluid" src="../img/login.png" alt="Logo">
                    </div>
                    <div class="login-right">
                        <div class="login-right-wrap">
                            <h1>Sign Up</h1>
                            <p class="account-subtitle">Enter details to create your account</p>

                            <form>
                                <div class="form-group">
                                    <label>Username <span class="login-danger">*</span></label>
                                    <input class="form-control" type="text" v-model="registerData.username">
                                    <span class="profile-views"><i class="fas fa-user-circle"></i></span>
                                </div>
                                <div class="form-group">
                                    <label>Email <span class="login-danger">*</span></label>
                                    <input class="form-control" type="text" v-model="registerData.email">
                                    <span class="profile-views"><i class="fas fa-envelope"></i></span>
                                </div>
                                <div class="form-group">
                                    <label>Password <span class="login-danger">*</span></label>
                                    <input class="form-control pass-input" type="text" v-model="registerData.password">
                                    <span class="profile-views feather-eye toggle-password"></span>
                                </div>
                                <div class="form-group">
                                    <label>Confirm password <span class="login-danger">*</span></label>
                                    <input class="form-control pass-confirm" type="text" v-model="registerData.confirmedPassword">
                                    <span class="profile-views feather-eye reg-toggle-password"></span>
                                </div>
                                <div class=" dont-have">Already Registered? <router-link :to='`/login`'><a>Login</a></router-link>
                                </div>
                                <div class="form-group mb-0">
                                    <button class="btn btn-primary btn-block" type="button" @click="register()">Register</button>
                                </div>
                            </form>

                            <div class="login-or">
                                <span class="or-line"></span>
                                <span class="span-or">or</span>
                            </div>

                            <div class="social-login">
                                <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
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
import axios from 'axios'
const API_URL = "http://localhost:5035/api/taskmanagerapp";
export default {
    name: "Register",
    components: {

    },
    data() {
        return {
            registerData: {
                username: '',
                password: '',
                email: '',
                confirmedPassword: ''

            }

        }
    },
    methods: {
        async register() {
            console.log('agahad')
            if (!this.registerData.username || !this.registerData.email || !this.registerData.password || !this.registerData.confirmedPassword) return
            if (this.password != this.confirmedPassword) return
            else {
                try {
                    console.log('gagga')
                    const formData = new FormData();
                    formData.append('username', this.registerData.username);
                    formData.append('email', this.registerData.email);
                    formData.append('password', this.registerData.password);


                    const response = await axios.post(API_URL + "/register", formData);
                    if (response) {
                        this.$router.push('/login');
                        
                    }

                    this.registerData = {
                        username: '',
                        email: '',
                        password: ''
                    };

                } catch (error) {
                    console.log('Something went wrong')
                }
            }

        }

    }
}
</script>
