import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from '.FirstComponent';




ReactDOM.render(
  <React.StrictMode>
    <App />
    outside of app component<br/>
    <First />
  </React.StrictMode>,
  document.getElementById('root')
);



// Parent
// Child
// Grandchild