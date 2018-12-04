import React, { Component } from 'react';
import './App.css';
import EmpDashboard from './components/emp/empDashboard/empDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EmpDashboard />
      </div>
    );
  }
}

export default App;
