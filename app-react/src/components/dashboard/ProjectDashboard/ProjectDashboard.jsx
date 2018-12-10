import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import ProjectSearch from './ProjectSearch/ProjectSearch';
import ProjectDetails from './ProjectDetails/ProjectDetails';

class ProjectDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects:''
    };
  }

  componentDidMount() {
    this.getProjects();
    console.log('[ProjectDashboard.js] Method componentDidMount()')
  }

  getProjects = () => {
    console.log('[ProjectDashboard.js] Method getProjects()')
    axios
      .get(`http://localhost:5000/api/projects`)
      .then(responseFromApi => {
        const projectData = responseFromApi.data;
        this.setState({projects: projectData });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.projects)
    return (
      <div id="projectDashBoard">
        <ProjectSearch source={this.state.projects}/>
        {/* <Route path="projects/:id" exact component={ProjectDetails}/> */}
      </div>
    );
  }
}

export default ProjectDashBoard;
