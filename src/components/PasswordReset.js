import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const UserContext = React.createContext(null);

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      {!user ? <Navigate to="/login" /> : children}
    </UserContext.Provider>
  );
};

export default PrivateRoute;
