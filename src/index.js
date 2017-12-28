import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = require(`./config.js`);

const fb = firebase  
  .initializeApp(config)
  .database()
  .ref();

fb.on('value', snapshot => {  
  const store = snapshot.val();
//  debugger;
  ReactDOM.render(
    <App {...store} />,
    document.getElementById('root')
  );
});

registerServiceWorker();
