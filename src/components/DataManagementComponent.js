import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, Marker } from 'react-leaflet';


const DataManagement = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [mapCenter, setMapCenter] = useState({
    lat: 0,
    lng: 0,
  });
  const [mapZoom, setMapZoom] = useState(1);

  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/current.json?key=58b76d95ede94f088be92656230905&q=London&aqi=yes')
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      });
  }, []);

  const renderMap = () => {
    return (
      <MapContainer center={mapCenter} zoom={mapZoom}>
        {weatherData.map((weather) => (
          <Marker key={weather.id} position={weather.coord} />
        ))}
      </MapContainer>
    );
  };

  const sortWeatherData = () => {
    const sortedData = weatherData.sort((a, b) => {
      if (sortBy === 'name') {
        if (sortOrder === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      } else if (sortBy === 'temperature') {
        if (sortOrder === 'asc') {
          return a.main.temp - b.main.temp;
        } else {
          return b.main.temp - a.main.temp;
        }
      }
    });
    setWeatherData(sortedData);
  };

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
      <button onClick={() => setMapCenter({ lat: weatherData[0].coord.lat, lng: weatherData[0].coord.lng })}>
        View on Map
      </button>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Name</option>
        <option value="temperature">Temperature</option>
      </select>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button onClick={sortWeatherData}>Sort</button>
      {renderMap()}
    </div>
  );
};

export default DataManagement;