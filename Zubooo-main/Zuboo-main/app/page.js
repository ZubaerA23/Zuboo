'use client'

// app/page.js

import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './Home';
import LoginPage from './LoginPage';

export default function Page() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return user ? <Home /> : <LoginPage />;
}
