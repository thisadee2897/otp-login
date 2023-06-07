import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/homepage.css';
import reportWebVitals from './reportWebVitals';
// import HomePage from './page/homepage';
// import AddForm from './page/AddForm';
import HomePage from './page/homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
reportWebVitals();
