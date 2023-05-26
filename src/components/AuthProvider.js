import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDKuecENT2pH12MSS4qX2d5EyNR_zKYWWE',
  authDomain: 'weathro.firebaseapp.com',
  databaseURL: 'https://weathro-default-rtdb.firebaseio.com/',
  projectId: 'weathro',
  storageBucket: 'weathro.appspot.com',
  messagingSenderId: '928290145192',
  appId: '1:928290145192:web:89ec4d0b697cdcb9d0d39d',
};
firebase.initializeApp(firebaseConfig);

// Create the AuthContext
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Error logging in:', error);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  const value = {
    user,
    login,
    logout,
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // User is logged in
        setUser(currentUser);
      } else {
        // User is logged out
        setUser(null);
      }
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
