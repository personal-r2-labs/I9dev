import React, { Component } from 'react';
// import ProjectsData from '../../../data/projectData.json';
// import DetailProject from '../detailProject/detailProject';
// import FindProject from '../findProject/findProject';
import ResultProject from '../resultProject/resultProject';
import axios from 'axios';

class ProjectDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  getProjects = () => {
    // const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/projects`)
      .then(responseFromApi => {
        const theProfile = responseFromApi.data;
        this.setState({ projects: theProfile });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getProjects();
  }

  

  render() {
    return (
      <div id="projectDashBoard">
        <ResultProject projects={this.state.projects} />
      </div>
    );
  }
}

export default ProjectDashBoard;
