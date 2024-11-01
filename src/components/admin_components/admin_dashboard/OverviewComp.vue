<template>
    <div class="row">
            <!-- Карточка користувачів -->
            <div class="col-xl-3 col-sm-6 col-12 d-flex">
              <div class="card bg-comman w-100">
                <div class="card-body">
                  <div class="db-widgets d-flex justify-content-between align-items-center">
                    <div class="db-info">
                      <h6>Users</h6>
                      <h3>{{ usersCount }}</h3>
                    </div>
                    <div class="db-icon">
                      <!-- Відображаємо іконку -->
                      <img :src="dashIcon01" alt="Dashboard Icon">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Карточка постів -->
            <div class="col-xl-3 col-sm-6 col-12 d-flex">
              <div class="card bg-comman w-100">
                <div class="card-body">
                  <div class="db-widgets d-flex justify-content-between align-items-center">
                    <div class="db-info">
                      <h6>Posts</h6>
                      <h3>{{ postsCount }}</h3>
                    </div>
                    <div class="db-icon">
                      <img :src="dashIcon02" alt="Dashboard Icon">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Карточка коментарів -->
            <div class="col-xl-3 col-sm-6 col-12 d-flex">
              <div class="card bg-comman w-100">
                <div class="card-body">
                  <div class="db-widgets d-flex justify-content-between align-items-center">
                    <div class="db-info">
                      <h6>Comments</h6>
                      <h3>{{ commentsCount }}</h3>
                    </div>
                    <div class="db-icon">
                      <img :src="dashIcon03" alt="Dashboard Icon">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Карточка доходу -->
            <div class="col-xl-3 col-sm-6 col-12 d-flex">
              <div class="card bg-comman w-100">
                <div class="card-body">
                  <div class="db-widgets d-flex justify-content-between align-items-center">
                    <div class="db-info">
                      <h6>Revenue</h6>
                      <h3>$505</h3>
                    </div>
                    <div class="db-icon">
                      <img :src="dashIcon04" alt="Dashboard Icon">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
import apiService from '@/services/apiService';
 import dashIcon01 from '@/img/dash-icon-01.svg';
  import dashIcon02 from '@/img/dash-icon-02.svg';
  import dashIcon03 from '@/img/dash-icon-03.svg';
  import dashIcon04 from '@/img/dash-icon-04.svg';
  export default {
    name:"overwiew",
    data(){
        return{

            usersCount: 0,
            postsCount: 0,
            commentsCount: 0,
            dashIcon01,
        dashIcon02,
        dashIcon03,
        dashIcon04,

        }

    },
    created(){
        this.fetchUsers();
      this.fetchPosts();
      this.fetchComments();
    },
    methods:{
        fetchUsers() {
        apiService
          .getUsers()
          .then((response) => {
            // Зберігаємо дані користувачів
            this.users = response.data.map((user) => {
              // Додаємо випадкові значення для оцінок, відсотків та року
              
            });
            // Оновлюємо кількість користувачів
            this.usersCount = this.users.length;
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
      },
      // Метод для отримання постів
      fetchPosts() {
        apiService
          .getPosts()
          .then((response) => {
            this.posts = response.data;
            this.postsCount = this.posts.length;
          })
          .catch((error) => {
            console.error('Error fetching posts:', error);
          });
      },
      // Метод для отримання коментарів
      fetchComments() {
        apiService
          .getComments()
          .then((response) => {
            this.comments = response.data;
            this.commentsCount = this.comments.length;
          })
          .catch((error) => {
            console.error('Error fetching comments:', error);
          });
      },

    }
  }
</script>