import React, { Component } from "react";
import "./App.css";
import SignUp from './components/auth/SignUp/SignUp'; 
import DevDashBoard from './components/dashboard/DevDashboard/DevDashboard'
import MainHomePage from "./components/test/MainHomePage";

class AppTest extends Component {
  render() {
    return (
      <div className="App">
      <MainHomePage />
      </div>
    );
  }
}

export default AppTest;
