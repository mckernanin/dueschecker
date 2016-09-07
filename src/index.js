import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './components/App';
import './assets/index.css';

ReactGA.initialize('UA-52435052-3');

function logPageView() {
	ReactGA.pageview(window.location.hash);
}

ReactDOM.render(
  <App onload={logPageView}/>,
  document.getElementById('root')
);
