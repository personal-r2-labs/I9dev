import React, { Component } from "react";
import "./App.css";
import SignUp from './components/auth/SignUp/SignUp'; 
import DevDashBoard from './components/dashboard/DevDashboard/DevDashboard'

class AppTest extends Component {
  render() {
    return (
      <div className="App">
      <DevDashBoard />
      </div>
    );
  }
}

export default AppTest;
