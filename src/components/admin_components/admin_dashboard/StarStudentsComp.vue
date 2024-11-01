<template>
    
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
            
</template>
<script>
import apiService from '@/services/apiService';
export default {
    name:'starStudents',
    data(){
        return{
            users: []
        }
    },
    created(){
        this.fetchUsers();
    },
    methods:{
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
            
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
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
      
    }
}
</script>