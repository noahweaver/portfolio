import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD6J72gY_r5CkTuguXlCpCaLKbL48cTLY",
  authDomain: "noah-weaver-portfolio.firebaseapp.com",
  projectId: "noah-weaver-portfolio",
  storageBucket: "noah-weaver-portfolio.appspot.com",
  messagingSenderId: "547080757617",
  appId: "1:547080757617:web:e5882fbcdc1b41b5c6d6d0",
  measurementId: "G-0Q2E83EFGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
