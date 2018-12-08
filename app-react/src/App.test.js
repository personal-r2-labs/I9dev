import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DevDashBoard from './components/dashboard/DevDashboard/DevDashboard'
import './App.css'

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
