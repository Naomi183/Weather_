import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { Chart } from 'chart.js';
import firebase from 'firebase/app';

const DataAnalyticsComponent = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [alerts, setAlerts] = useState(null);

  const canvasRef = useRef(null);

  const drawChart = useCallback(() => {
    const ctx = canvasRef.current.getContext('2d');
    const data = [
      {
        x: 0,
        y: weatherData[0].temperature,
      },
      {
        x: 1,
        y: weatherData[1].temperature,
      },
      {
        x: 2,
        y: weatherData[2].temperature,
      },
      {
        x: 3,
        y: weatherData[3].temperature,
      },
      {
        x: 4,
        y: weatherData[4].temperature,
      },
    ];
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Temperature',
            data: data,
            borderColor: 'blue',
            backgroundColor: 'lightblue',
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            ticks: {
              display: false,
            },
          },
          y: {
            type: 'linear',
            position: 'left',
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  }, [weatherData]);

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

  useLayoutEffect(() => {
    if (canvasRef.current) {
      drawChart();
    }
  }, [weatherData, alerts]);

  return (
    <div>
      <h1>Data Analytics</h1>
      <h2>Weather Data</h2>
      {weatherData && (
        <ul>
          {weatherData.map((datum) => (
            <li key={datum.id}>
              {datum.temperature}°F
              {datum.description}
            </li>
          ))}
        </ul>
      )}
      <h2>Alerts</h2>
      {alerts && (
        <div>
          <ul>
            {alerts.map((datum) => (
              <li key={datum.id}>
                {datum.message}
              </li>
            ))}
          </ul>
        </div>
      )}
      <h2>Weather Patterns</h2>
      <div>
        <canvas id="temperature-chart" width="500" height="200" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default DataAnalyticsComponent;
