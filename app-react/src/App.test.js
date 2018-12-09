import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Route, Switch } from 'react-router-dom';
// import SignUp2 from './components/auth/SignUp/SignUp';
// import Home from './components/home/home'
// import ProjectDashBoard from './components/dashboard/ProjectDashboard/ProjectDashboard/ProjectDashboard'
// import DetailProject from './components/dashboard/ProjectDashboard/ProjectDetails/ProjectDetails'
// import SignUp from './components/auth/SignUp/SignUp';
// import Dev from './components/dashboard/DevDashboard/DevDashboard'
// import Ent from './components/dashboard/EntDashboard/EntDashboard'
import SearchExampleStandard from './search'

class AppTest extends Component {
  render() {
    return (
      <div className="App">
        {/* <Switch >
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={ProjectDashBoard} />
          <Route path='/projects/:id' component={DetailProject} />
          <Route path='/loginsignup' component={SignUp} />
          <Route path='/dev' component={Dev} />
          <Route path='/ent' component={Ent} />
        </Switch> */}
        {/* <Home /> */}
        <SearchExampleStandard />
      </div>
    );
  }
}

export default AppTest;