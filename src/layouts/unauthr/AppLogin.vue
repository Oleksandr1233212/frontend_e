<template>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <title>Preskool - Login</title>

    <!-- <link rel="shortcut icon" href="assets/img/favicon.png">

<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">

<link rel="stylesheet" href="assets/plugins/feather/feather.css">

<link rel="stylesheet" href="assets/plugins/icons/flags/flags.css">

<link rel="stylesheet" href="assets/plugins/fontawesome/css/fontawesome.min.css">
<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css"> -->

    <!-- <link rel="stylesheet" href="../css/sstyle.css"> -->
</head>

<body>

    <div class="main-wrapper login-body">
        <div class="login-wrapper">
            <div class="container">
                <div class="loginbox">
                    <div class="login-left">
                        <img class="img-fluid" src="../../img/login.png" alt="Logo">
                    </div>
                    <div class="login-right">
                        <div class="login-right-wrap">
                            <h1>Welcome to Preskool</h1>
                            <p class="account-subtitle">Need an account? <router-link :to='`/register`'><a>Sign Up</a></router-link>
                            </p>
                            <h2>Sign in</h2>

                            <form>
                                <div class="form-group">
                                    <label>Username <span class="login-danger">*</span></label>
                                    <input class="form-control" type="text" v-model="loginData.username">
                                    <span class="profile-views"><i class="fas fa-user-circle"></i></span>
                                </div>
                                <div class="form-group">
                                    <label>Password <span class="login-danger">*</span></label>
                                    <input class="form-control pass-input" type="text" v-model="loginData.password">
                                    <span class="profile-views feather-eye toggle-password"></span>
                                </div>
                                <div class="forgotpass">
                                    <div class="remember-me">
                                        <label class="custom_check mr-2 mb-0 d-inline-flex remember-me"> Remember me
                                            <input type="checkbox" name="radio">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-block" type="button" @click="login()">Login</button>
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
    name: 'Login',
    components: {

    },

    data() {
        return {
            loginData: {
                username: '',
                password: ''
            }

        }

    },
    methods: {
        async login() {
            
            if (!this.loginData.username || !this.loginData.password) {
                console.log("Username and Password are required")
            } else {
                try {
                    console.log('gagga')
                    const formData = new FormData();
                    formData.append('username', this.loginData.username);

                    formData.append('password', this.loginData.password);

                    const response = await axios.post(API_URL + "/login", formData);

                    if (response.data.userId) {
                        localStorage.setItem('userId', response.data.userId);
                        this.$router.push('/admin');

                    }

                    this.loginData={
                        username: '',
                        password:''
                    }

                } catch (error) {
                    console.log("something went wrong")

                }
            }

        }

    }
}
</script>
