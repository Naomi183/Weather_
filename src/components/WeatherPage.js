import React, { useEffect, useState } from 'react';
import WeatherVisualization from './WeatherVisualization';
import WeatherAlert from './WeatherAlert';
import axios from 'axios';

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherAlerts, setWeatherAlerts] = useState([]);

  useEffect(() => {
    // Fetch weather data and alerts from an API
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=58b76d95ede94f088be92656230905&q=London&aqi=yes');
        const data = response.data;
        setWeatherData(data.weatherData);
        setWeatherAlerts(data.weatherAlerts);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>Weather Page</h1>
      {weatherData && <WeatherVisualization data={weatherData} />}
      {weatherAlerts.length > 0 ? (
        weatherAlerts.map((alert) => (
          <WeatherAlert
            key={alert.id}
            title={alert.title}
            description={alert.description}
            severity={alert.severity}
            timestamp={alert.timestamp}
          />
        ))
      ) : (
        <p>No weather alerts at the moment.</p>
      )}
    </div>
  );
};

export default WeatherPage;
