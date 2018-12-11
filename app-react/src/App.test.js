import React, { Component } from "react";
import "./App.css";
import AddProject from './components/dashboard/ProjectDashboard/ProjectAddForm/ProjectAddForm';
import SignUp from './components/auth/SignUp/SignUp'; 

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
