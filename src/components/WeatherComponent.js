import React, { useEffect } from 'react';
import { storeWeatherData, getWeatherData } from './DataManagement';
import WeatherCard from './WeatherCard';
import Forecast from './Forecast';
import WeatherData from './WeatherData';

const WeatherComponent = () => {
  useEffect(() => {
    // Store weather data
    const location = 'London';
    const weatherData = { temperature: 20, humidity: 60 };
    storeWeatherData(location, weatherData);

    // Retrieve weather data
    getWeatherData(location).then((data) => {
      console.log(data);
    });
  }, []);

  const forecastData = [
    {
      date: 'May 20, 2023',
      temperature: '25°C',
      condition: 'Sunny',
      additionalInfo: 'UV Index: Moderate',
    },
    {
      date: 'May 21, 2023',
      temperature: '22°C',
      condition: 'Partly Cloudy',
      additionalInfo: 'Chance of Rain: 30%',
    },
    // Add more forecast data
  ];

  return (
    <div>
      {weatherData.map((weather) => (
        <WeatherCard
          key={weather.location}
          location={weather.location}
          temperature={weather.temperature}
          condition={weather.condition}
        />
      ))}
      <div>
      <h2>Weather Forecast</h2>
      <Forecast forecastData={forecastData} />
    </div>
    <WeatherData location="London" />
    </div>
  );
};

export default WeatherComponent;
