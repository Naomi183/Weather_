import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherChart = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY")
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather for London</h1>
      <h2>Current Conditions</h2>
      <p>
        Temperature: {weatherData.main.temp}°C
      </p>
      <p>
        Humidity: {weatherData.main.humidity}%
      </p>
      <p>
        Wind Speed: {weatherData.wind.speed} m/s
      </p>
      <h2>Forecast</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>High</th>
            <th>Low</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.forecast.map((forecast, index) => (
            <tr key={index}>
              <td>{forecast.dt}</td>
              <td>{forecast.main.temp_max}</td>
              <td>{forecast.main.temp_min}</td>
              <td>{forecast.weather[0].main}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherChart;
