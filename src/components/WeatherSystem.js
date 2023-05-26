import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js';

const WeatherSystem = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    // Fetch weather data
    const fetchData = async () => {
      try {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=58b76d95ede94f088be92656230905&q=Abuja&aqi=yes'); // Replace 'API_ENDPOINT' with the actual weather API endpoint
        setWeatherData(response.data);
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Create and update the chart
    if (weatherData) {
      const ctx = document.getElementById('weatherChart').getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: weatherData.labels,
          datasets: [
            {
              label: 'Temperature',
              data: weatherData.temperatures,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
            {
                label: 'Wind Speed',
                data: weatherData.windSpeeds, 
                backgroundColor: 'rgba(192, 75, 75, 0.2)',
                borderColor: 'rgba(192, 75, 75, 1)',
                borderWidth: 1,
              },
              {
                label: 'Precipitation',
                data: weatherData.precipitation, 
                backgroundColor: 'rgba(75, 75, 192, 0.2)',
                borderColor: 'rgba(75, 75, 192, 1)',
                borderWidth: 1,
              },
          ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Days',
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Temperature',
                },
                
              },
            },
            tooltips: {
              enabled: true,
              mode: 'index',
              intersect: false,
            },
        },
      });

      setChart(newChart);
    }
  }, [weatherData]);

  return (
    <div>
      <canvas id="weatherChart" width="400" height="200"></canvas>
      {weatherData && (
        <div>
          <h2>Current Weather: {weatherData.currentWeather}</h2>
          <p>Temperature: {weatherData.currentTemperature}</p>
          <p>Humidity: {weatherData.currentHumidity}</p>
          <p>Windy: {weatherData.currentWindSpeed}</p>
          {/* Display additional weather data */}
        </div>
      )}
    </div>
  );
};

export default WeatherSystem;
