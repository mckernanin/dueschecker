import React, { Component } from 'react';
import '../assets/App.css';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tahosa Lodge Dues</h2>
        </div>
        <p className="App-intro">
          Something's not quite right, maybe try going back to <a href="/">dues.tahosalodge.org</a>?
        </p>
      </div>
    );
  }
}

export default NotFound;
