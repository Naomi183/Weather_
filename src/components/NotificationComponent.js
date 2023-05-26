import React, { useState, useEffect, setAlerts } from 'react';

const NotificationComponent = ({ alerts }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const firebase = firebase.database();
    const ref = firebase.ref(`/alerts`);
    ref.on('value', (snapshot) => {
      setAlerts(snapshot.val());
    });
  }, []);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div>
      {alerts.length > 0 && (
        <div>
          <h1>Alerts</h1>
          <ul>
            {alerts.map((datum) => (
              <li key={datum.id}>
                {datum.message}
                <button onClick={handleCloseNotification}>Close</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;
