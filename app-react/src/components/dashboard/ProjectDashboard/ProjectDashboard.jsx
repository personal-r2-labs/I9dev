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
    this.getSingleProject();
  }

  projectSelectedHandler(id) {
    this.setState({ selectedId: id });
  }

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

  getSingleProject = () => {
    console.log('[ProjectDetails.js] getSingleProject', this.props);
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/projects/${params.id}`)
      .then(responseFromApi => {
        const theProject = responseFromApi.data;
        this.setState({ theProject });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div id="projectDashBoard">
        <TesteNavBar />
        <div>
          <ProjectSearch projects={this.state.projects} />
          <ProjectsList
            projects={this.state.projects}
          />
          <ProjectDetails {}/>
        </div>
        <div>
          <Route path="/projects/:id" exact component={ProjectDetails} />
        </div>
      </div>
    );
  }
}

export default ProjectDashBoard;
