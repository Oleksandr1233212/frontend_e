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
  name: 'GraphComp',
  setup() {
    const chartCanvas = ref(null); // Посилання на canvas
    const chartInstance = ref(null); // Посилання на екземпляр Chart.js

    // Функція генерації випадкових даних
    const generateRandomData = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));

    // Ініціалізація графіка
    onMounted(async () => {
      await nextTick(); // Чекаємо, поки Vue вставить canvas у DOM

      if (!chartCanvas.value) {
        console.error('❌ Помилка: canvas не знайдено в DOM');
        return;
      }

      const ctx = chartCanvas.value.getContext('2d');
      if (!ctx) {
        console.error('❌ Помилка: getContext повернув null');
        return;
      }

      // Зберігаємо екземпляр Chart.js у ref
      chartInstance.value = new Chart(ctx, {
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

    // Видалення графіка при демонтажі компонента
    onBeforeUnmount(() => {
      if (chartInstance.value) {
        chartInstance.value.destroy();
        chartInstance.value = null;
      }
    });

    return { chartCanvas };
  },
};
</script>

<style scoped>
/* Додайте стилі за потреби */
</style>