import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//Home Page Component
import Home from './components/home/home';

//SignUp and Login Component
import LoginSignUp from './components/auth/LoginSignUp/LoginSignUp';

// Projects Components
import Projects from './components/project/projectDashboard/projectDashboard';
import ProjectDetails from './components/project/projectDetails/projectDetails';

// Developers Component
import Dev from './components/dev/devDashboard/devDashboard';

// Enterprise Component
import Ent from './components/ent/entDashboard/entDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch >
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/projects/:id' component={ProjectDetails} />
        <Route path='/loginsignup' component={LoginSignUp} />
        <Route path='/dev' component={Dev} />
        <Route path='/ent' component={Ent} />
      </Switch>
      </div>
    );
  }
}

export default App;
