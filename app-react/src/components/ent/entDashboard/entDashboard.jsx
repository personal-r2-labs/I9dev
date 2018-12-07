import React, { Component } from 'react';
import EntProfile from '../entProfile/entProfile';

class EntDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const { name, email, linkedin, facebook, projects, photoPath } = this.state;
    return (
      <EntProfile
        name={name}
        email={email}
        linkedin={linkedin}
        facebook={facebook}
        projects={projects}
        photoPath={photoPath}
      />
    );
  }
}

export default EntDashboard;
