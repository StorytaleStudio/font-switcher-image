import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-ibm-plex-sans';
import   'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'

ReactDOM.render(
  <React.StrictMode>
    <App {...window.templateProps} />
  </React.StrictMode>,
  document.getElementById('root')
);
