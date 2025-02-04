<template>
    <div>
      <canvas ref="chartCanvas"></canvas> <!-- ✅ Тут ссылка на canvas -->
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default {
    name: 'GraphComp',
    setup() {
      const chartCanvas = ref(null); // ✅ Используем ref вместо getElementById
      let chartInstance = null;
  
      // 📌 Генерация случайных данных
      const generateRandomData = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
  
      onMounted(async () => {
        await nextTick(); // ✅ Ждём, пока Vue вставит <canvas> в DOM
  
        if (!chartCanvas.value) {
          console.error('❌ Ошибка: canvas не найден в DOM');
          return;
        }
  
        const ctx = chartCanvas.value.getContext('2d'); // ✅ Теперь canvas существует
        if (!ctx) {
          console.error('❌ Ошибка: getContext вернул null');
          return;
        }
  
        chartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Students',
                data: generateRandomData(),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: false,
                tension: 0.4,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
              },
              {
                label: 'Teachers',
                data: generateRandomData(),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
                tension: 0.4,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
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
  