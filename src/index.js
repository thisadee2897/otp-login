import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/homepage.css';
import reportWebVitals from './reportWebVitals';
// import HomePage from './page/homepage';
import AddForm from './page/AddForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HomePage /> */}
    <AddForm />
  </React.StrictMode>
);
reportWebVitals();
