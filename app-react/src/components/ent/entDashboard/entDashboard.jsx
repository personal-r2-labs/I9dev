import React, { Component } from 'react';
import EmpProfile from '../empProfile/empProfile';

class EmpDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ray Charles',
      email: 'ray.charles@ironhack.com',
      linkedin: 'http://www.linkedin.com/ray.charles',
      facebook: 'http://www.facebook.com/ray.charles',
      photoPath:
        'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
      projects: [
        {
          name: 'Lorem Ipsum sdosdsmdosdm',
          description: 'Lorem Impsunsds',
          owner: 'Ray Charles'
        },
        {
          name: 'Lorem Ipsum sdosdsmdosdm',
          description: 'Lorem Impsunsds',
          owner: 'Ray Charles'
        },
        {
          name: 'Lorem Ipsum sdosdsmdosdm',
          description: 'Lorem Impsunsds',
          owner: 'Ray Charles'
        }
      ]
    };
  }

  render() {
    const { name, email, linkedin, facebook, projects, photoPath } = this.state;
    return (
      <EmpProfile
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

export default EmpDashboard;
