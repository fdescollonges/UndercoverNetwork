import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from './logo.svg';
import img from './undercover.png';
import './App.scss';
import './RandomText.scss';
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
          <img src={img} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to UNDERCOVER Onboarding website</h1>
        </header>
        <p className="App-intro">
          To get started, generate your One-time-Password by clicking on the following button.
        </p>
        <Button variant="danger" size="lg" onClick={this.showLetters}><i class="fa fa-exclamation-triangle"></i> Generate Password  <i class="fa fa fa-exclamation-triangle"></i></Button>
        <Letters letters={text} state={this.state.showLetters}/>
      </div>
    );
  }
}

export default App;
