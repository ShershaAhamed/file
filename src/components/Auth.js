
import React, { useState } from 'react';
// import { auth } from './firebase'; 

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    Auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered:', user);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  };

  const handleLogin = () => {
    Auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in:', user);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
