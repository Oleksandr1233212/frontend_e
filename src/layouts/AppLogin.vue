<template>
  <div class="main-wrapper login-body">
    <div class="login-wrapper">
      <div class="container">
        <div class="loginbox">
          <div class="login-left">
            <img class="img-fluid" src="@/assets/img/login.png" alt="Logo" />
          </div>
          <div class="login-right">
            <div class="login-right-wrap">
              <h1>Welcome to Preskool</h1>
              <p class="account-subtitle">
                Need an account? <router-link to="/register">Sign Up</router-link>
              </p>
              <h2>Sign in</h2>

              <form @submit.prevent="handleLogin">
                <div class="form-group">
                  <label>Username <span class="login-danger">*</span></label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="username"
                    placeholder="Enter your username"
                  />
                  <span class="profile-views"><i class="fas fa-user-circle"></i></span>
                </div>
                <div class="form-group">
                  <label>Password <span class="login-danger">*</span></label>
                  <input
                    class="form-control pass-input"
                    type="password"
                    v-model="password"
                    placeholder="Enter your password"
                  />
                  <span class="profile-views feather-eye toggle-password"></span>
                </div>
                <div v-if="errorMessage" class="form-group">
                  <p class="text-danger">{{ errorMessage }}</p>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary btn-block" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const handleLogin = async () => {
      errorMessage.value = ''; // Очистка попередніх помилок
      if (!username.value || !password.value) {
        errorMessage.value = 'Please fill in all fields.';
        return;
      }

      try {
        await authStore.login(username.value, password.value);
        if (authStore.isAuthenticated) {
          const role = authStore.userRole; // Отримуємо роль з `authStore`
          if (role === 'admin') {
            alert(role);
            router.push('/admin');
          } else if (role === 'teacher') {
            router.push('/teach');
          } else if (role === 'student') {
            router.push('/stud');
          } else {
            errorMessage.value = 'Unknown role. Please contact support.';
          }
        }
      } catch (error) {
        errorMessage.value = authStore.error || 'Login failed. Please try again.';
      }
    };

    return {
      username,
      password,
      errorMessage,
      handleLogin,
    };
  },
};
</script>

<style scoped>
/* Стилі для сторінки логіну */
</style>
