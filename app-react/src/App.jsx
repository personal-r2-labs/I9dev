import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar'
import DevDashBoard from './components/dev/devDashboard/devDashboard.jsx'
import ProjectDashBoard from './components/project/projectDashboard/projectDashboard';
import Home from './components/home/home'
import Footer from './components/footer/footer'
import EntDashboard from './components/ent/entDashboard/entDashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <EntDashboard />
      </div>
    );
  }
}

export default App;
