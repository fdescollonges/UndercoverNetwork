import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './DangerButton.js';
import DangerButton from './DangerButton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to UNDERCOVER Onboarding website</h1>
        </header>
        <p className="App-intro">
          To get started, generate your One-time-Password by clicking on the following button.
        </p>
        <DangerButton />
      </div>
      
    );
  }
}

export default App;
