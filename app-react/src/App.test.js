import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//Home Page Component
import MainPage from './components/home/MainPage/MainPage';

//SignUp and Login Component
import SignUp from './components/auth/SignUp/SignUp';

// Projects Components
import Projects from './components/dashboard/ProjectDashboard/ProjectDashboard';
import ProjectDetails from './components/dashboard/ProjectDashboard/ProjectDetails/ProjectDetails';
import AddProject from './components/dashboard/ProjectDashboard/ProjectAddForm/ProjectAddForm';
import SignUp from './components/auth/SignUp/SignUp'; 

// Developers Component
import Dev from './components/dashboard/DevDashboard/DevDashboard';

// Enterprise Component
import Ent from './components/dashboard/EntDashboard/EntDashboard';

class AppTest extends Component {
  render() {
    return (
      <div className="App">
      <SignUp />
      </div>
    );
  }
}

export default AppTest;
