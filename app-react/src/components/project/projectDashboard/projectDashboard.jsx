import React, { Component } from 'react';
import ProjectsData from '../../../data/projectData.json';
import DetailProject from '../detailProject/detailProject';
import FindProject from '../findProject/findProject';
import ResultProject from '../resultProject/resultProject';

class ProjectDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: ProjectsData
    };
  }

  render() {
    return (
      <div id="projectDashBoard">
        <div id="FindAndResultDiv">
          <FindProject />
          <ResultProject projects={this.state.projects} />
        </div>
        <DetailProject project={this.state.projects[0]} />
      </div>
    );
  }
}

export default ProjectDashBoard;
