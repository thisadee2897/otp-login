import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/homepage.css';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
// import AddForm from './page/AddForm';
// import HomePage from './page/homepage';
// import App from './App';
// import Login from './page/LoginPage';
import OTP from './page/otpp'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OTP />
  </React.StrictMode>
);
reportWebVitals();
