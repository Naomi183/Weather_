import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = firebase.auth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user && (
        <div>
          <h2>Name: {user.displayName}</h2>
          <h2>Email: {user.email}</h2>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
