import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar'
import DevDashBoard from './components/dev/devDashboard/devDashboard.jsx'
import ProjectDashBoard from './components/project/projectDashboard/projectDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProjectDashBoard />
      </div>
    );
  }
}

export default App;
