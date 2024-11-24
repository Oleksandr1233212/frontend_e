<template>
    <div>
       
        <canvas id="thirdChart"></canvas>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);
function generateRandomData() {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
}

export default {
    mounted() {
        const ctx = document.getElementById('thirdChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',  
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Students',
                        data: generateRandomData(),
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',  // синий для ученика
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'Teachers',
                        data: generateRandomData(),
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',  // красный для учителя
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
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
                        position: 'top',  
                    },
                    annotation: {
                        annotations: {
                            label: {
                                type: 'label',
                                xValue: 'April',  
                                yValue: 100,  
                                backgroundColor: 'white',
                                content: ['Student: Blue', 'Teacher: Red'],
                                font: {
                                    size: 16,
                                    family: 'Arial',
                                }
                            }
                        }
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