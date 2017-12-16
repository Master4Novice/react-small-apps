import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import LoginComponent from '../components/LoginComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Login React Basic App</h1>
        </header>
        <br/>
        <LoginComponent/>
      </div>
    );
  }
}

export default App;
