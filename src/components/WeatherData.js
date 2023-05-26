import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherData = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://api.weatherapi.com/data/2.5/weather?q=${London}&appid=58b76d95ede94f088be92656230905`)
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
      <h1>Weather for {location}</h1>
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
      <h2>Alerts</h2>
      <ul>
        {weatherData.alerts.map((alert, index) => (
          <li key={index}>
            <strong>{alert.event}</strong>: {alert.description}
          </li>
        ))}
      </ul>
      <button onClick={() => setWeatherData(null)}>Refresh</button>
    </div>
  );
};

export default WeatherData;
