import React, { Component } from 'react';
import ProjectsData from '../../../data/projectData.json';
import DetailProject from '../detailProject/detailProject';
import FindProject from '../findProject/findProject';
import ResultProject from '../resultProject/resultProject;';

class DetailProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: ProjectsData
    };
  }

  render() {
    return (
      <div>
        <FindProject />
        <ResultProject projects={this.state.projects} />
        <DetailProject />
      </div>
    );
  }
}

export default DetailProject;
