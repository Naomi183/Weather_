import React, { useState } from 'react';
import { useWeatherAPI } from '../api/weatherAPI';

const LocationSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { searchLocation } = useWeatherAPI();
  
    const handleSearch = async () => {
      try {
        const apiKey = '58b76d95ede94f088be92656230905';
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=58b76d95ede94f088be92656230905&q=London&aqi=yes`;
        const locationResults = await searchLocation(searchQuery);
        
        // Handle the location results (e.g., display a list of matching locations)
        console.log('Location search results:', locationResults);
      } catch (error) {
        console.error('Failed to search for location:', error);
      }
    };
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter a location"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default LocationSearch;
  