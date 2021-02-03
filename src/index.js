import React from 'react';
import ReactDOM from 'react-dom';
import './components/home-page/index.css';
import App from './App';
import { AppProvider } from './components/home-page/context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
