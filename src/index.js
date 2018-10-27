/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "react-dom";
import ReactGA from "react-ga";
import { Router } from "@reach/router";

import App from "./components/App";
import NotFound from "./components/NotFound";
import "./assets/index.css";

ReactGA.initialize("UA-52435052-3");

function logPageView() {
  ReactGA.pageview(window.location.hash);
}

const Root = () => (
  <Router>
    <App path="/" />
    <App path="/registration" />
    <NotFound default />
  </Router>
);

render(<Root onload={logPageView} />, document.getElementById("root"));
