<template>
  <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <router-link :to='`/`'><a  class="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>eLEARNING</h2>
    </a></router-link>
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <router-link :to='`/`'><a class="nav-item nav-link active">Home</a></router-link>
        <router-link :to='`about`'><a  class="nav-item nav-link">About</a></router-link>
        <router-link :to='`courses`'><a class="nav-item nav-link">Courses</a></router-link>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div class="dropdown-menu fade-down m-0">
            <router-link :to='`team`'><a class="dropdown-item">Our Team</a></router-link>
            <router-link :to='`testimonial`'><a class="dropdown-item">Testimonial</a></router-link>
            <router-link :to='`error`'><a class="dropdown-item">404 Page</a></router-link>
          </div>
        </div>
        <router-link :to='`contact`'><a class="nav-item nav-link">Contact</a></router-link>
      </div>
      <router-link :to='`/register`'><a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i class="fa fa-arrow-right ms-3"></i></a></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbarComponent'
};
</script>

<style scoped>
/* Додайте свої стилі тут */
</style>
