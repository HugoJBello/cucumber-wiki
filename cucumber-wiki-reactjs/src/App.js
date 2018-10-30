import { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Roots from './Roots';
import React from 'react';
import { LoginContext } from './components/auth/LoginContext';
class App extends Component {

  render() {
    let context = {
      username: "hugo",
      changeUsername: (username) => {
        this.setState({ username: username })
      }
    };
    return (
      <LoginContext.Provider value={context}>
        <div className="App">
          <AppNavbar></AppNavbar>
          <Roots></Roots>
        </div>
      </LoginContext.Provider >

    );
  }
}

export default App;
