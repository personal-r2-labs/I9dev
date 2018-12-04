import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar'
import CardDev from './components/dev/cardDev/cardDev';
import DevCarrousel from './components/dev/devCarrousel/devCarrousel';
import DevDashBoard from './components/dev/devDashboard/devDashboard';
import Footer from "./components/footer/footer"
import Home from './components/home/home'
import FindProject from './components/project/findProject/findProject';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FindProject />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
