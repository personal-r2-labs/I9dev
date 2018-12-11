import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import ProjectSearch from './ProjectSearch/ProjectSearch';
import ProjectsList from './ProjectsList/ProjectsList';
import ProjectDetails from './ProjectDetails/ProjectDetails';

class ProjectDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.getProjects();
    console.log('[ProjectDashboard.js] Method componentDidMount()');
  }

  projectSelectedHandler(id) {
    this.setState({selectedId: id});
  }

  getProjects = () => {
    console.log('[ProjectDashboard.js] Method getProjects()');
    axios
      .get(`http://localhost:5000/api/projects`)
      .then(responseFromApi => {
        const projectData = responseFromApi.data;
        this.setState({ projects: projectData });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div id="projectDashBoard">
        <div>
          <ProjectSearch source={this.state.projects} />
          <ProjectsList projects={this.state.projects} clicked={this.projectSelectedHandler} />
        </div>
        <div>
          <Route path="/projects/:id" exact component={ProjectDetails} />
        </div>
      </div>
    );
  }
}

export default ProjectDashBoard;
