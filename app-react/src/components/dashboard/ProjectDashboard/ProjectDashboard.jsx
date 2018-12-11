import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import ProjectSearch from './ProjectSearch/ProjectSearch';
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
        </div>
        <Route path="projects/:id" component={ProjectDetails} />
      </div>
    );
  }
}

export default ProjectDashBoard;
