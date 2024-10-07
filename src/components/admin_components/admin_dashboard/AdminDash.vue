> Дмитро Ващишин:
<template>
    <div class="main-wrapper">
      <!-- Підключаємо заголовок та бокову панель -->
      <Headerr />
      <Sidebar />
  
      <div class="page-wrapper">
        <div class="content container-fluid">
  
          <!-- Заголовок сторінки -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <div class="page-sub-header">
                  <h3 class="page-title">Welcome Admin!</h3>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item active">Admin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Карточки статистики -->
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
  
          <!-- Таблиця студентів та активність -->
          <div class="row">
            <!-- Таблиця "Star Students" -->
            <div class="col-xl-6 d-flex">
              <div class="card flex-fill student-space comman-shadow">
                <div class="card-header d-flex align-items-center">
                  <h5 class="card-title">Star Students</h5>
                  <ul class="chart-list-out student-ellips">
                    <li class="star-menus"><a href="#"><i class="fas fa-ellipsis-v"></i></a></li>
                  </ul>
                </div>
                <div class="card-body">

> Дмитро Ващишин:
<div class="table-responsive">
                    <!-- Таблиця з даними студентів -->
                    <table class="table star-student table-hover table-center table-borderless table-striped">
                      <thead class="thead-light">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th class="text-center">Marks</th>
                          <th class="text-center">Percentage</th>
                          <th class="text-end">Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- Проходимося по масиву користувачів та відображаємо дані -->
                        <tr v-for="user in users" :key="user.id">
                          <td class="text-nowrap">
                            <div>{{ user.id }}</div>
                          </td>
                          <td class="text-nowrap">
                            {{ user.name }}
                          </td>
                          <td class="text-center">{{ user.marks }}</td>
                          <td class="text-center">{{ user.percentage }}%</td>
                          <td class="text-end">
                            <div>{{ user.year }}</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Розділ "Student Activity" -->
            <div class="col-xl-6 d-flex">
              <div class="card flex-fill comman-shadow">
                <div class="card-header d-flex align-items-center">
                  <h5 class="card-title">Student Activity</h5>
                  <ul class="chart-list-out student-ellips">
                    <li class="star-menus"><a href="#"><i class="fas fa-ellipsis-v"></i></a></li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="activity-groups">
                    <!-- Проходимося по масиву активностей та відображаємо їх -->
                    <div class="activity-awards" v-for="(activity, index) in activities" :key="index">
                      <div class="award-boxs">
                        <!-- Відображаємо відповідну іконку для активності -->
                        <img :src="activity.icon" alt="Award">
                      </div>
                      <div class="award-list-outs">
                        <h4>{{ activity.title }}</h4>
                        <h5>{{ activity.description }}</h5>
                      </div>
                      <div class="award-time-list">
                        <span>{{ activity.timeAgo }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Соціальні блоки -->
          <div class="row">
            <!-- Блок Facebook -->
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card flex-fill fb sm-box">
                <div class="social-likes">
                  <p>Like us on facebook</p>
                  <h6>50,095</h6>
                </div>
                <div class="social-boxs">
                  <img :src="socialIcon01" alt="Social Icon">
                </div>
              </div>
            </div>
            <!-- Блок Twitter -->
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card flex-fill twitter sm-box">
                <div class="social-likes">
                  <p>Follow us on twitter</p>
                  <h6>48,596</h6>
                </div>
                <div class="social-boxs">
                  <img :src="socialIcon02" alt="Social Icon">
                </div>
              </div>
            </div>
            <!-- Блок Instagram -->
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card flex-fill insta sm-box">

> Дмитро Ващишин:
<div class="social-likes">
                  <p>Follow us on instagram</p>
                  <h6>52,085</h6>
                </div>
                <div class="social-boxs">
                  <img :src="socialIcon03" alt="Social Icon">
                </div>
              </div>
            </div>
            <!-- Блок LinkedIn -->
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card flex-fill linkedin sm-box">
                <div class="social-likes">
                  <p>Follow us on linkedin</p>
                  <h6>69,050</h6>
                </div>
                <div class="social-boxs">
                  <img :src="socialIcon04" alt="Social Icon">
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Футер -->
        <footer>
          <p>Copyright © 2022 Dreamguys.</p>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  /*
    Тут ми імпортуємо необхідні компоненти та зображення.
  */
  import Headerr from '@/components/admin_components/HeaderComp.vue';
  import Sidebar from '../SidebarComp.vue';
  import apiService from '@/services/apiService';
  
  // Імпортуємо зображення для іконок
  import dashIcon01 from '@/img/dash-icon-01.svg';
  import dashIcon02 from '@/img/dash-icon-02.svg';
  import dashIcon03 from '@/img/dash-icon-03.svg';
  import dashIcon04 from '@/img/dash-icon-04.svg';
  import awardIcon01 from '@/img/award-icon-01.svg';
  import awardIcon02 from '@/img/award-icon-02.svg';
  import awardIcon03 from '@/img/award-icon-03.svg';
  import awardIcon04 from '@/img/award-icon-04.svg';
  import socialIcon01 from '@/img/social-icon-01.svg';
  import socialIcon02 from '@/img/social-icon-02.svg';
  import socialIcon03 from '@/img/social-icon-03.svg';
  import socialIcon04 from '@/img/social-icon-04.svg';
  
  export default {
    name: 'admin',
    components: {
      Headerr,
      Sidebar,
    },
    data() {
      return {
        // Масиви для зберігання даних
        users: [],
        posts: [],
        comments: [],
        activities: [], // Масив для активностей студентів
        // Лічильники для статистичних карточок
        usersCount: 0,
        postsCount: 0,
        commentsCount: 0,
        // Зображення іконок
        dashIcon01,
        dashIcon02,
        dashIcon03,
        dashIcon04,
        awardIcons: [awardIcon01, awardIcon02, awardIcon03, awardIcon04],
        socialIcon01,
        socialIcon02,
        socialIcon03,
        socialIcon04,
      };
    },
    created() {
      // Коли компонент створюється, ми викликаємо методи для отримання даних
      this.fetchUsers();
      this.fetchPosts();
      this.fetchComments();
      this.generateActivities();
    },
    methods: {
      // Метод для отримання користувачів
      fetchUsers() {
        apiService
          .getUsers()
          .then((response) => {
            // Зберігаємо дані користувачів
            this.users = response.data.map((user) => {
              // Додаємо випадкові значення для оцінок, відсотків та року
              return {
                ...user,
                marks: this.getRandomMarks(),
                percentage: this.getRandomPercentage(),
                year: this.getRandomYear(),
              };
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
      // Метод для генерації випадкових активностей студентів
      generateActivities() {
        // Створюємо масив можливих активностей
        const activityTemplates = [
          {
            title: 'Won 1st place in "Math Olympiad"',
            description: 'John Doe won 1st place in "Math Olympiad"',
          },
          {
            title: 'Participated in "Science Fair"',
            description: 'Jane Smith participated in "Science Fair"',
          },
          {
            title: 'Attended conference at "Tech University"',
            description: 'Mike Johnson attended conference at "Tech University"',
          },
          {
            title: 'Won 2nd place in "Art Competition"',
            description: 'Emily Davis won 2nd place in "Art Competition"',
          },
        ];
        // Генеруємо активності з випадковими іконками та часом
        this.activities = activityTemplates.map((activity, index) => {
            // Оператор розпакування: Три крапки ...
          return {
            ...activity,
            icon: this.awardIcons[index % this.awardIcons.length],
            timeAgo: this.randomTimeAgo(),
          };
        });
      },
      // Метод для отримання імені користувача за його ID
      getUserName(userId) {
        const user = this.users.find((u) => u.id === userId);
        return user ? user.name : 'Unknown User';
      },
      // Метод для генерації випадкових оцінок
      getRandomMarks() {
        // Випадкове число від 800 до 1000
        return Math.floor(Math.random() * 201) + 800;
      },
      // Метод для генерації випадкового відсотка
      getRandomPercentage() {
        // Випадкове число від 90.0 до 100.0
        return (Math.random() * 10 + 90).toFixed(1);
      },
      // Метод для генерації випадкового року
      getRandomYear() {
        // Випадковий рік від 2015 до поточного року
        const currentYear = new Date().getFullYear();
        return Math.floor(Math.random() * (currentYear - 2015 + 1)) + 2015;
      },
      // Метод для отримання випадкового часу
      randomTimeAgo() {
        const times = ['Just now', '1 hour ago', '2 hours ago', 'Yesterday', '2 days ago'];
        return times[Math.floor(Math.random() * times.length)];
      },
    },
  };
  </script>
  
  <style scoped>

  </style> 