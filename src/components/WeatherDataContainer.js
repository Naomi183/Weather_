import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import NotificationComponent from './components/NotificationComponent';
import PrivateRoute from './routes/PrivateRoute';
import AuthProvider from './components/AuthProvider';

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [alerts, setAlerts] = useState(null);

  useEffect(() => {
    const firebaseRef = firebase.database().ref('/weather');
    firebaseRef.on('value', (snapshot) => {
      setWeatherData(snapshot.val());
    });
    firebaseRef.child('alerts').on('child_added', (snapshot) => {
      setAlerts((prevAlerts) => [...prevAlerts, snapshot.val()]);
    });

    return () => {
      firebaseRef.off();
      firebaseRef.child('alerts').off();
    };
  }, []);

  return (
    <div>
      <h1>Weather Data</h1>
      {weatherData && (
        <ul>
          {Object.values(weatherData).map((datum) => (
            <li key={datum.id}>{datum.temperature}</li>
          ))}
        </ul>
      )}
      <h1>Alerts</h1>
      {alerts && <NotificationComponent alerts={alerts} />}
    </div>
  );
};

const WeatherDataContainer = () => {
  return (
    <PrivateRoute>
      <AuthProvider>
        <WeatherData />
      </AuthProvider>
    </PrivateRoute>
  );
};

export default WeatherDataContainer;