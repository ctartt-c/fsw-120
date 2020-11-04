import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactCard from './colorCards';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <ContactCard />
  </React.StrictMode>,
  document.getElementById('root')
);

