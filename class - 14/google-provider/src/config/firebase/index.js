// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAKotwuSLQJRSpu04wi2y3mS3HE8Zwg-s",
  authDomain: "login-app-b8384.firebaseapp.com",
  projectId: "login-app-b8384",
  storageBucket: "login-app-b8384.firebasestorage.app",
  messagingSenderId: "282853130647",
  appId: "1:282853130647:web:195d4bedbbd7eec06bc4d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
