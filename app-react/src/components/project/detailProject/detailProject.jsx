import React, { Component } from 'react';
import EmpProfile from '../empProfile/empProfile';

class DetailProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ray Charles',
      category: 'ray.charles@ironhack.com',
      description: 'http://www.linkedin.com/ray.charles',
      filePath: '',
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

export default DetailProject;
