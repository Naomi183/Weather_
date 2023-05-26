import React, { useState } from "react";
import axios from "axios";

const WeatherAPI = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=58b76d95ede94f088be92656230905&q=London&aqi=yes");
    setWeatherData(response.data);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather in London</h1>
      <p>
        Temperature: {weatherData.main.temp}°C
      </p>
      <p>
        Humidity: {weatherData.main.humidity}%
      </p>
      <p>
        Pressure: {weatherData.main.pressure}hPa
      </p>
      <p>
        Wind speed: {weatherData.wind.speed}m/s
      </p>
      <p>
        Weather description: {weatherData.weather[0].description}
      </p>
    </div>
  );
};

export default WeatherAPI;
