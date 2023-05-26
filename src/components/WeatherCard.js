import React from 'react';

const WeatherCard = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h2 className="text-xl font-bold">Current Weather</h2>
      <p className="text-lg">Temperature: 25°C</p>
      <p className="text-lg">Condition: Sunny</p>
    </div>
  );
};

export default WeatherCard;
