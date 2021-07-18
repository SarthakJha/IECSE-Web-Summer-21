import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // The root component which is <App/> imported from App.js is being rendered into an element
  // with an ID of root. You can find this element in public/index.html
  document.getElementById('root')
);

// This file is the entry point of the application.
