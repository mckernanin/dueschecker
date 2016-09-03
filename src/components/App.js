import React, { Component } from 'react';
import Form from './Form';
import '../assets/App.css';
let isEmbed = window != window.parent;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tahosa Lodge Dues</h2>
        </div>
        <p className="App-intro">
          To look up your dues, fill out the form below.
        </p>
		<Form/>
      </div>
    );
  }
}

export default App;
