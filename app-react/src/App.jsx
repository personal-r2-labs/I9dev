import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//Home Page Component
import MainPage from './components/home/MainPage/MainPage';

//SignUp and Login Component
import SignUp from './components/auth/SignUp/SignUp';
import Login from './components/home/LoginForm/LoginForm';

// Projects Components
import Projects from './components/dashboard/ProjectDashboard/ProjectDashboard';
import AddProject from './components/dashboard/ProjectDashboard/ProjectAddForm/ProjectAddForm';

// Users Component Dashboard
import User from './components/dashboard/UserDashboard/UserDashboard';

import AuthService from './components/auth/auth-service';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {loggedInUser: null}
    this.service = new AuthService();
  }

  fetchUser(){
    if(this.state.loggedInUser === null){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser: response
        })
      })
      .catch( err => {
        this.setState({
          loggedInUser: false
        })
      })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
        <Switch>
          <Route path="/projects/add" component={AddProject} />
          <Route path="/projects" component={Projects} />
          <Route path="/user/:id" exact component={User} />
          <Route path="/user/projects" exact component={User} />  
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
      )
    }
    return (
      <div className="App">
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/signup" render={() => <SignUp getUser={this.getTheUser}/>} />
          <Route path="/" render={() => <MainPage getUser={this.getTheUser} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
