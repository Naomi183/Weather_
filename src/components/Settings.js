import React, { useState } from 'react';

const Settings = () => {
  // Define state variables for user preferences
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [weatherDataSource, setWeatherDataSource] = useState('default');

  // Handle temperature unit change
  const handleTemperatureUnitChange = (event) => {
    setTemperatureUnit(event.target.value);
  };

  // Handle notification enabled change
  const handleNotificationEnabledChange = (event) => {
    setNotificationEnabled(event.target.checked);
  };

  // Handle weather data source change
  const handleWeatherDataSourceChange = (event) => {
    setWeatherDataSource(event.target.value);
  };

  // Save settings
  const saveSettings = () => {
    // Implement saving logic here (e.g., update user preferences in the database)
    console.log('Settings saved:', {
      temperatureUnit,
      notificationEnabled,
      weatherDataSource,
    });
  };

  return (
    <div>
      <div className="bg-gray-200 py-8">
      <div className="container mx-auto">
      <h2>Settings</h2>
      <form>
        <div>
          <label>
            Temperature Unit:
            <select value={temperatureUnit} onChange={handleTemperatureUnitChange}>
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Enable Notifications:
            <input
              type="checkbox"
              checked={notificationEnabled}
              onChange={handleNotificationEnabledChange}
            />
          </label>
        </div>
        <div>
          <label>
            Weather Data Source:
            <select value={weatherDataSource} onChange={handleWeatherDataSourceChange}>
              <option value="default">Default</option>
              <option value="alternative">Alternative</option>
            </select>
          </label>
        </div>
        <button type="button" onClick={saveSettings}>
          Save Settings
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Settings;
