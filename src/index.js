import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { initializeApp } from "firebase/app";
import App from './App';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTEpjzZzZXhw-yJU8mY6uNd245HYbe8-0",
  authDomain: "verneau.firebaseapp.com",
  projectId: "verneau",
  storageBucket: "verneau.appspot.com",
  messagingSenderId: "1048509148857",
  appId: "1:1048509148857:web:36b7093365aecae6443568"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

