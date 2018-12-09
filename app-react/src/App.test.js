import React, { Component } from "react";
import ReactDOM from "react-dom";
import DevDashBoard from "./components/dashboard/DevDashboard/DevDashboard";
import EntDashBoard from "./components/dashboard/EntDashboard/EntDashboard";
import MainPage from "./components/home/mainPage/MainPage";
import "./App.css";

class AppTest extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default AppTest;
