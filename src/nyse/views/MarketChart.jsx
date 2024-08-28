import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Paper, Typography, Grid } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

export const MarketChart = ({ timeSeries }) => {
    const dates = timeSeries.map(item => new Date(item.t).toLocaleDateString());

    const volumes = timeSeries.map(item => item.v);
    const vwaps = timeSeries.map(item => item.vw);
    const openPrices = timeSeries.map(item => item.o);
    const closePrices = timeSeries.map(item => item.c);
    const highPrices = timeSeries.map(item => item.h);
    const lowPrices = timeSeries.map(item => item.l);

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Volume',
                data: volumes,
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                fill: true,
                yAxisID: 'y1',
            },
            {
                label: 'VWAP',
                data: vwaps,
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.2)',
                fill: true,
                yAxisID: 'y2',
            },
            {
                label: 'Open Price',
                data: openPrices,
                borderColor: '#ffc107',
                backgroundColor: 'rgba(255, 193, 7, 0.2)',
                fill: true,
                yAxisID: 'y2',
            },
            {
                label: 'Close Price',
                data: closePrices,
                borderColor: '#dc3545',
                backgroundColor: 'rgba(220, 53, 69, 0.2)',
                fill: true,
                yAxisID: 'y2',
            },
            {
                label: 'High Price',
                data: highPrices,
                borderColor: '#17a2b8',
                backgroundColor: 'rgba(23, 162, 184, 0.2)',
                fill: true,
                yAxisID: 'y2',
            },
            {
                label: 'Low Price',
                data: lowPrices,
                borderColor: '#6f42c1',
                backgroundColor: 'rgba(111, 66, 193, 0.2)',
                fill: true,
                yAxisID: 'y2',
            },
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            y1: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Volume',
                },
            },
            y2: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Price',
                },
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    return (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Market Trend</Typography>
                <Line data={data} options={options} />
            </Paper>
        </Grid>
    );
}
