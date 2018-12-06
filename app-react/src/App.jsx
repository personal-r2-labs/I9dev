import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar'
import DevDashBoard from './components/dev/devDashboard/devDashboard.jsx'
import ProjectDashBoard from './components/project/projectDashboard/projectDashboard';
import Home from './components/home/home'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <div>
        <ProjectDashBoard />
        </div>
        <div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
