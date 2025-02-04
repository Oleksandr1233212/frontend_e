<template>
    <div>
        <canvas id="secondChart"></canvas>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

// Register all necessary Chart.js components
Chart.register(...registerables);

function generateRandomData() {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
}

export default {
    mounted() {
        const ctx = document.getElementById('secondChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',  // Change to line chart
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Students',
                        data: generateRandomData(),
                        borderColor: 'rgba(54, 162, 235, 1)',  // Blue for students
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        fill: false,  // Don't fill the area under the line
                        tension: 0.4,  // Smooth curve for the line
                        pointBackgroundColor: 'rgba(54, 162, 235, 1)',  // Blue points
                    },
                    {
                        label: 'Teachers',
                        data: generateRandomData(),
                        borderColor: 'rgba(255, 99, 132, 1)',  // Red for teachers
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        fill: false,  // Don't fill the area under the line
                        tension: 0.4,  // Smooth curve for the line
                        pointBackgroundColor: 'rgba(255, 99, 132, 1)',  // Red points
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
                        position: 'top',  // Place legend at the top
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
};
</script>