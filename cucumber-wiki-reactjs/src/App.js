import { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Roots from './Roots';
import React from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar></AppNavbar>
        <Roots></Roots>
      </div>
    );
  }
}

export default App;
