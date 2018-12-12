import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import TesteNavBar from '../shared/NavBar/testeNavBar';
import ProjectSearch from './ProjectSearch/ProjectSearch';
import ProjectsList from './ProjectsList/ProjectsList';
import ProjectDetails from './ProjectDetails/ProjectDetails';

class ProjectDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      theProject: {},
      selectedId: ''
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  projectSelectedHandler = id => {
    this.props.history.push('/projects/' + id);
  };

  getProjects = () => {
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

  updateProjects = () => {

  }

  render() {
    return (
      <div id="projectDashBoard">
        <TesteNavBar />
        <div>
          <ProjectSearch projects={this.state.projects} />
          <ProjectsList
            projects={this.state.projects}
            clicked={this.projectSelectedHandler}
          />
        </div>
        <div>
            <Route path={this.props.match.url + '/:id'} exact component={ProjectDetails} />
        </div>
      </div>
    );
  }
}

export default ProjectDashBoard;
