<template>
    <div>
      <!-- Прив'язка посилання до canvas через ref -->
      <canvas ref="chartRef" id="secondChart"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  // Реєстрація всіх необхідних компонентів Chart.js
  Chart.register(...registerables);
  
  // Функція для генерації випадкових даних
  function generateRandomData() {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
  }
  
  export default {
    setup() {
      const chartRef = ref(null);
  
      onMounted(() => {
        // Перевірка, чи canvas вже доступний
        if (chartRef.value) {
          const ctx = chartRef.value.getContext('2d');
          new Chart(ctx, {
            type: 'line',  // Лінійний графік
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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
                }
              ]
            },
            options: {
              responsive: true,
              plugins: {
                tooltip: {
                  enabled: true
                },
                legend: {
                  position: 'top'
                }
              },
              scales: {
                x: {
                  beginAtZero: true
                },
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }
      });
  
      return {
        chartRef
      };
    }
  };
  </script>