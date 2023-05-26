import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const WeatherVisualization = ({ weatherData }) => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      // Create a new chart instance
      const ctx = chartRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          // Provide the weather data for the chart
          labels: weatherData.map((data) => data.date),
          datasets: [
            {
              label: 'Temperature',
              data: weatherData.map((data) => data.temperature),
              borderColor: 'red',
            },
            {
              label: 'Humidity',
              data: weatherData.map((data) => data.humidity),
              borderColor: 'blue',
            },
          ],
        },
        options: {
          // Configure the chart options as needed
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
  
      return () => {
        // Cleanup chart instance when component unmounts
        chart.destroy();
      };
    }, [weatherData]);
  
    return <canvas ref={chartRef} />;
  };
  
  export default WeatherVisualization;
  