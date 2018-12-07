import React, { Component } from 'react';
import './App.css';
import SignUp from './components/auth/SignUp/signUp'
import NavBar1 from './components/navBar/navBar1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar1 />
        <SignUp />
      </div>
    );
  }
}

export default App;
