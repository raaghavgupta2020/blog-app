import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//index.js is basically taking the 
const root = ReactDOM.createRoot(document.getElementById('root'));//this root is basically the id of the file where these compenents are being rendered 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

