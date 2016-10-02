import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import './assets/index.css';

ReactGA.initialize('UA-52435052-3');

function logPageView() {
	ReactGA.pageview(window.location.hash);
}

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Match pattern="/registration" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(
  <Root onload={logPageView}/>,
  document.getElementById('root')
);
