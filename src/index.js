import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Snowfall style={{ height: '100%', zIndex: 1 }} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
