import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const firebase = require('firebase');
require('firebase/firestore');
firebase.initializeApp({
  apiKey: "AIzaSyAXjSylG_6BcoIofTmDZioOMmnAH-O8sH4",
  authDomain: "advtodo-d5ca0.firebaseapp.com",
  databaseURL: 'https://advtodo-d5ca0.firebaseio.com',
  projectId: "advtodo-d5ca0",
  storageBucket: "advtodo-d5ca0.appspot.com",
  messagingSenderId: "1006322199837",
  appId: "1:1006322199837:web:16c735f666a209186005f4"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);
