import { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Roots from './Roots';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <AppNavbar></AppNavbar>
          <Roots></Roots>
          </div>
          </Router>
        </div>
    );
  }
}

export default App;
