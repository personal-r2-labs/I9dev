import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar'
import DevDashBoard from './components/dev/devDashboard/devDashboard.jsx'
import ProjectDashBoard from './components/project/projectDashboard/projectDashboard';
import Home from './components/home/home'
import CardDev from './components/home/cardDev'
import DevCarrousel from './components/home/devCarrousel';
import Footer from './components/footer/footer'

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
