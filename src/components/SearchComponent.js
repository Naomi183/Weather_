import React, { useState } from 'react';

const SearchComponent = () => {
  const [address, setAddress] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "58b76d95ede94f088be92656230905";

  const handleSelect = async (selectedAddress) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      const { lat, lng } = latLng;

      // Fetch weather data using the obtained latitude and longitude
      const weatherResponse = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${'58b76d95ede94f088be92656230905'}&q=${selectedAddress}&aqi=yes&lat=${lat}&lng=${lng}&days=3`
      );
      const weatherJson = await weatherResponse.json();
      setWeatherData(weatherJson);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (selectedAddress) => {
    setAddress(selectedAddress);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        onChange={(event) => setAddress(event.target.value)}
      />
      <button onClick={() => setWeatherData(null)}>Search</button>
      {weatherData && (
        <div>
          <h1>Weather for {address}</h1>
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
      )}
    </div>
  );
};

export default SearchComponent;
