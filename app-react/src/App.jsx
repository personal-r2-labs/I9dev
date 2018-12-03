import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar'
import CardDev from './components/dev/cardDev/cardDev';
import DevCarrousel from './components/dev/devCarrousel/devCarrousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevCarrousel />
      </div>
    );
  }
}

export default App;
