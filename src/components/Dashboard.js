import React, { useState, useEffect } from 'react';
/*import firebase from 'firebase';
import { AuthContext } from './context/AuthContext';
import NotificationComponent from './components/NotificationComponent';
import WeatherData from './components/WeatherData';*/

const Dashboard = () => {
/*  const { user } = useContext(AuthContext);

  if (!user) {
    return <Redirect to="/login" />;
  }

  const [weatherData, setWeatherData] = useState(null);
  const [alerts, setAlerts] = useState(null);

  useEffect(() => {
    const firebase = firebase.database();
    const ref = firebase.ref(`/weather/${location}`);
    ref.on('value', (snapshot) => {
      setWeatherData(snapshot.val());
    });
    ref.on('child_added', (snapshot) => {
      setAlerts([...alerts, snapshot.val()]);
    });
  }, []);
*/
  return (
    <p>Hello</p>
    /*
    <div className='container'>
      <h1 className='mt-5'>Dashboard</h1>
      <div className="row mt-4">
        <div className="col-md-6">
      <h2>Weather Data</h2>
      {weatherData && (
        <ul className="list-group">
          {weatherData.map((datum) => (
            <li key={datum.id}>{datum.temperature}</li>
          ))}
        </ul>
      )}
      <div className="col-md-6"></div>
      <h2>Alerts</h2>
      {alerts && (
        <NotificationComponent alerts={alerts} />
      )}
    </div>
    </div>
    </div>
    */
  );
};

export default Dashboard;
