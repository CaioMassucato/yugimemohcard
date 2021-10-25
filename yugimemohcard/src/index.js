import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

import './index.css';
import Routes from './services/routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
  
  
  );
  
