import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import SignUp from './components/auth/SignUp/signUp'
=======
import DevDashBoard from './components/dev/devDashboard/devDashboard.jsx'
import Home from './components/home/home'
import EntDashboard from './components/ent/entDashboard/entDashboard'
import AddProject from './components/project/addProject/addProject'
import SignUp2 from './components/auth/SignUp/SignUp2'
>>>>>>> 396fc58e2ac8890fc21c2bd5a901b5e2b34639a1
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
