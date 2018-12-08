import React, { Component } from 'react';
import './App.css';
import ButtonExampleInverted from './components/test/ButtonExampleInverted'
import DevDashBoard from './components/dev/devDashboard/devDashboard.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevDashBoard />
      </div>
    );
  }
}

export default App;
