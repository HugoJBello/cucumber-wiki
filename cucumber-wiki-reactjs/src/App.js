import { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Roots from './Roots';
import React from 'react';
import { LoginContext } from './components/auth/LoginContext';
class App extends Component {
  render() {
    return (
      <LoginContext.Provider value={{ userName: null }}>
        <div className="App">
          <AppNavbar></AppNavbar>
          <Roots></Roots>
        </div>
      </LoginContext.Provider >

    );
  }
}

export default App;
