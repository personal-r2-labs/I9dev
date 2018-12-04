import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar'
import DevDashBoard from './components/dev/devDashboard/devDashboard.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <DevDashBoard />
      </div>
    );
  }
}

export default App;
