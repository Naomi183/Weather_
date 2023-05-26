import React, { useState, useEffect } from 'react';
export { AuthProvider }



const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const firebase = firebase.auth();
    firebase.onAuthStateChanged((user) => {
      setIsAuthenticated(user != null);
    });
  }, []);

  return (
    <div>
      <h1>AuthContext</h1>
      <p>IsAuthenticated: {isAuthenticated}</p>
      {children}
    </div>
  );
};

export default AuthContext;
