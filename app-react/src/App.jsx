import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar'
import Home from './components/home/home'
import CardDev from './components/dev/cardDev/cardDev';
import Footer from './components/footer/footer'
import DevCarrousel from './components/dev/devCarrousel/devCarrousel';
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
