import React from 'react';
import WeatherCard from './WeatherCard';
import WeatherAlert from './WeatherAlert';

const HomePage = () => {
  // Assuming you have weather data and alerts from an API
  const weatherData = [
    { id: 1, temperature: 25, condition: 'Sunny' },
    { id: 2, temperature: 18, condition: 'Cloudy' },
    { id: 3, temperature: 12, condition: 'Rainy' },
  ];

  const weatherAlerts = [
    { id: 1, message: 'Heavy rain and thunderstorms expected in your area.' },
    { id: 2, message: 'High wind advisory in effect.' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Weather-Sensitive Industries App</h1>
      <div className="grid grid-cols-3 gap-4">
      <p className="text-white mb-6">Real-time weather updates and alerts</p>
        <div className="flex justify-center">
          <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        {weatherData.map((weather) => (
          <WeatherCard key={weather.id} temperature={weather.temperature} condition={weather.condition} />
        ))}
      </div>
      {weatherAlerts.map((alert) => (
        <WeatherAlert key={alert.id} message={alert.message} />
      ))}
    </div>
  );
};

export default HomePage;
