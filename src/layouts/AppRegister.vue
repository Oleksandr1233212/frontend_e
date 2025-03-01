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
                        <img class="img-fluid" src="../../img/login.png" alt="Logo">
                    </div>
                    <div class="login-right">
                        <div class="login-right-wrap">
                            <h1>Sign Up</h1>
                            <p class="account-subtitle">Enter details to create your account</p>

                            <form>
                                <div class="form-group">
                                    <label>Username <span class="login-danger">*</span></label>
                                    <input class="form-control" type="text" v-model="username">
                                    <span class="profile-views"><i class="fas fa-user-circle"></i></span>
                                </div>
                                <div class="form-group">
                                    <label>Email <span class="login-danger">*</span></label>
                                    <input class="form-control" type="text" v-model="email">
                                    <span class="profile-views"><i class="fas fa-envelope"></i></span>
                                </div>
                                <div class="form-group">
                                    <label>Password <span class="login-danger">*</span></label>
                                    <input class="form-control pass-input" type="text" v-model="password">
                                    <span class="profile-views feather-eye toggle-password"></span>
                                </div>
                                <div class="form-group">
                                    <label>Confirm password <span class="login-danger">*</span></label>
                                    <input class="form-control pass-confirm" type="text" v-model="confirmedPassword">
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'Register',
  setup() {
    const router = useRouter();

    const username = ref('');
    const email = ref('');
    const password = ref('');
    const confirmedPassword = ref('');
    const errorMessage = ref('');

    const register = async () => {
      errorMessage.value = ''; 
      if (!username.value || !email.value || !password.value || !confirmedPassword.value) {
        errorMessage.value = 'Please fill in all fields.';
        return;
      }
      if (password.value !== confirmedPassword.value) {
        errorMessage.value = 'Passwords do not match.';
        return;
      }

      try {
        console.log(username.value)
        const API_URL = "http://localhost:5040/api";
        const response = await axios.post(`http://localhost:5048/api/auth/register`, {
            username: username.value,
          
          password: password.value,
          role:'admin'
        });
        if (response) {
          router.push('/login');
        }
        
        username.value = '';
        email.value = '';
        password.value = '';
        confirmedPassword.value = '';
      } catch (error) {
        errorMessage.value = 'Something went wrong. Please try again.';
      }
    };

    return {
      username,
      email,
      password,
      confirmedPassword,
      errorMessage,
      register,
    };
  },
};
</script>
