
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataManagement = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/current.json?key=58b76d95ede94f088be92656230905&q=London&aqi=yes')
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Weather Data</h1>
      <ul>
        {weatherData.map((weather) => (
          <li key={weather.id}>
            {weather.name}: {weather.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataManagement;