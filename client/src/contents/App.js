import React, { Component } from 'react';
import '../css/App.css';
import { Route } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
         <br/>
         <div className="row">
             <Route exact path="/login" component={LoginComponent}/>
         </div>
      </div>
    );
  }
}

export default App;

