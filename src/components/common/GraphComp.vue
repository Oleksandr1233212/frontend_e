<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default {
    name: 'ThirdChart',
    setup() {
      const chartCanvas = ref(null); // 📌 Создаём ссылку на <canvas>
      let chartInstance = null; // 📌 Переменная для хранения графика
  
      // 📌 Функция генерации случайных данных
      const generateRandomData = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
  
      // 📌 Инициализация графика после монтирования
      onMounted(async () => {
        await nextTick(); // ✅ Ждём рендер DOM
  
        if (!chartCanvas.value) {
          console.error('❌ Ошибка: canvas не найден в DOM');
          return;
        }
  
        const ctx = chartCanvas.value.getContext('2d');
        if (!ctx) {
          console.error('❌ Ошибка: getContext вернул null');
          return;
        }
  
        chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                label: 'Students',
                data: generateRandomData(),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
              {
                label: 'Teachers',
                data: generateRandomData(),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              tooltip: { enabled: true },
              legend: { position: 'top' },
            },
            scales: {
              x: { beginAtZero: true },
              y: { beginAtZero: true },
            },
          },
        });
      });
  
      // 📌 Удаляем график перед уничтожением компонента
      onBeforeUnmount(() => {
        if (chartInstance) {
          chartInstance.destroy();
          chartInstance = null;
        }
      });
  
      return { chartCanvas };
    },
  };
  </script>
  
  <style scoped>
  /* Стили при необходимости */
  </style>
  