import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

//NavBar Component
import NavBar from './components/dashboard/shared/NavBarLogged/NavBarLogged'
//Home Page Component
import MainPage from './components/home/MainPage/MainPage';

//SignUp and Login Component
import SignUp from './components/auth/SignUp/SignUp';

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
  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };
  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
        <NavBar logoutUser={this.logoutUser} getTheUser={this.getTheUser} userInSession={this.state.loggedInUser}/>
        <Switch>
          <Route path="/projects/add" render={() => <AddProject />} />
          <Route path="/projects" render={() => <Projects loggedInUser={this.state.loggedInUser}/>} />
          <Route path="/user/:id" exact render={() => <User loggedInUser={this.state.loggedInUser}/>} />
          <Route path="/user/projects" exact component={User} />  
          <Route path="/" render={() => <Redirect to={`/user/${this.state.loggedInUser._id}`}/>} />
        </Switch>
      </div>
      )
    }
    return (
      <div className="App">
        <Switch>
          <Route path="/projects" render={() => <Redirect to={`/signup`}/>} />
          <Route path="/signup" render={() => <SignUp getUser={this.getTheUser}/>} />
          <Route path="/logout" render={() => <Redirect to={`/`}/>} />
          <Route path="/" render={() => <MainPage getUser={this.getTheUser} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
