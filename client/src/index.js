import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/score.css';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
