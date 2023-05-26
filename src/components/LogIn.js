import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Log In</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button variant="primary" onClick={handleSubmit}>Log In</button>
    </div>
  );
};

export default LogIn;