import React from 'react';

const WeatherAlerts = ({ title, description, severity, timestamp }) => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-md shadow-md">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Severity: {severity}</p>
      <p>Timestamp: {timestamp}</p>
    </div>
  );
};

export default WeatherAlerts;
