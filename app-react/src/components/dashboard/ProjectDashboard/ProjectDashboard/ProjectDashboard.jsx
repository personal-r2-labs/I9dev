import React, { Component } from 'react';

import ProjectSearch from '../ProjectSearch/ProjectSearch';
// import ProjectDetails from '../ProjectDetails/ProjectDetails';

class ProjectDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="projectDashBoard">
        <ProjectSearch />
        {/* <ProjectDetails /> */}
      </div>
    );
  }
}

export default ProjectDashBoard;
