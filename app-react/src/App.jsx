import React, { Component } from 'react';
import './App.css';
import EmpSignUpLogin from './components/auth/empSignUpLogin/empSignUpLogin';
import DevSignUpLogin from './components/auth/devSignUpLogin/devSignUpLogin';


class App extends Component {
  render() {
    return (
      <div className="App">
        <EmpSignUpLogin />
        <DevSignUpLogin />
      </div>
    );
  }
}

export default App;
