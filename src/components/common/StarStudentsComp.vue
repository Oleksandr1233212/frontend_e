<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill student-space comman-shadow">
      <div class="card-header d-flex align-items-center">
        <h5 class="card-title">Star Students</h5>
        <ul class="chart-list-out student-ellips">
          <li class="star-menus">
            <a href="#"><i class="fas fa-ellipsis-v"></i></a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <!-- Таблица с данными студентов -->
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
              <tr v-for="user in users" :key="user.id">
                <td class="text-nowrap">{{ user._id }}</td>
                <td class="text-nowrap">{{ user.username }}</td>
                <td class="text-center">{{ user.marks }}</td>
                <td class="text-center">{{ user.percentage }}%</td>
                <td class="text-end">{{ user.year }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import apiService from '@/services/apiService';

export default {
  name: 'StarStudents',
  setup() {
    const users = ref([]);

    // 📌 Функция получения пользователей
    const fetchUsers = async () => {
      try {
        const response = await apiService.get('api/auth/users'); // ✅ Исправленный вызов API
        users.value = response.data.map((user) => ({
          ...user,
          marks: getRandomMarks(),
          percentage: getRandomPercentage(),
          year: getRandomYear(),
        }));
      } catch (error) {
        console.error('❌ Ошибка при загрузке пользователей:', error);
      }
    };

    // 📌 Функции генерации случайных значений
    const getRandomMarks = () => Math.floor(Math.random() * 201) + 800;
    const getRandomPercentage = () => (Math.random() * 10 + 90).toFixed(1);
    const getRandomYear = () => {
      const currentYear = new Date().getFullYear();
      return Math.floor(Math.random() * (currentYear - 2015 + 1)) + 2015;
    };

    // 📌 Загружаем данные при монтировании компонента
    onMounted(fetchUsers);

    return { users };
  },
};
</script>
