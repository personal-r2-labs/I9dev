import React, { Component } from "react";
import "./App.css";
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
