import React, { Component } from 'react';
import './App.css';
import DevDashBoard from './components/dev/devDashboard/devDashboard.jsx'
import Home from './components/home/home'
import EntDashboard from './components/ent/entDashboard/entDashboard'
import AddProject from './components/project/addProject/addProject'
import SignUp2 from './components/auth/SignUp/SignUp2'
import NavBar1 from './components/navBar/navBar1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar1 />
        <SignUp2 />
      </div>
    );
  }
}

export default App;
