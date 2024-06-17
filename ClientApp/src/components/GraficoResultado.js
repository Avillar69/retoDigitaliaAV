import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraficoResultado = ({ data }) => {
    console.log(data)
    const chartData = {
        labels: data && data.map(item => item.descripcion),
        datasets: [
            {
                label: 'Votos',
                data: data && data.map(item => item.conteo),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Resultados actuales de la votación',
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default GraficoResultado;