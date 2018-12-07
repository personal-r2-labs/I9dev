import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar'
import DevDashBoard from './components/dev/devDashboard/devDashboard.jsx'
import ProjectDashBoard from './components/project/projectDashboard/projectDashboard';
import Home from './components/home/home'
import Footer from './components/footer/footer'
import EntDashboard from './components/ent/entDashboard/entDashboard'
import AddProject from './components/project/addProject/addProject'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddProject />
      </div>
    );
  }
}

export default App;
