import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './RandomText.scss';
//import DangerButton from './DangerButton.js';
//import Button from './Button';
const text = ['B','X','Y','B','A','Y','B','X'];

function DisplayLetters(props) {
  const letters = props.letters;
  const allLetters = letters.map((letter) =>
    <span className="letter">{letter}</span>
  );
  if (props.state) {
    return <div className="letters">{allLetters}</div>;
  } else {
    return <div className="letters"></div>
  }
}

function Letters( props ) {
  return (
    <div className="wrapper">
      <DisplayLetters letters={props.letters} state={props.state}/>
    </div>
  );
}

class App extends Component {
  state = {
    showLetters: false
  };

  showLetters = () => {
    this.setState({
      showLetters: !this.state.showLetters
    })
  }
  

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
        <button type="button" onClick={this.showLetters}>Generate One-time-password</button>
        <Letters letters={text} state={this.state.showLetters}/>
      </div>
    );
  }
}

export default App;
