import React, { Component } from "react";
import "./App.css";
import AddProject from './components/dashboard/ProjectDashboard/ProjectAddForm/ProjectAddForm';

class AppTest extends Component {
  render() {
    return (
      <div className="App">
      <AddProject />
      </div>
    );
  }
}

export default AppTest;
