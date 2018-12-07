import React, { Component } from 'react';
import './App.css';
import DevDashBoard from './components/dev/devDashboard/devDashboard.jsx'
import Home from './components/home/home'
import EntDashboard from './components/ent/entDashboard/entDashboard'
import AddProject from './components/project/addProject/addProject'
import SignUp from './components/auth/SignUp/signUp'
import NavBar1 from './components/navBar/navBar1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar1 />
        <SignUp />
      </div>
    );
  }
}

export default App;
