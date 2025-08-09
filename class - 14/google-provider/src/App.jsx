import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import { auth, provider } from "./config/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const [appUser, setAppUser] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);

      setAppUser(user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setAppUser(null);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setAppUser(null);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setAppUser(currentUser);
    });
  }, []);

  return (
    <>
      <h1>Sign in with Google Auth Provider: DEMO</h1>
      {appUser ? (
        <>
          <h2>Name: {appUser.displayName}</h2>
          <h2>Email: {appUser.email}</h2>
          <img src={appUser.photoURL} alt="User Image" />
          <button onClick={handleLogout}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in With Google</button>
      )}
    </>
  );
}

export default App;
