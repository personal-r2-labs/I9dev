import React from 'react';

const EntProfile = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>E-mail: {props.email}</p>
      <img src={props.photoPath} alt="Linkedin Logo" />
      <a href={props.linkedin}>
        <img src="/images/linkedin-icon.png" alt="Linkedin Logo" srcset="" />
      </a>
      <a href={props.facebook}>
        <img src="/images/facebook-icon.png" alt="Facebook Logo" srcset="" />
      </a>
      {props.projects.map((project, idx) => (
        <div key={idx}>
          <p>Project: {project.name}</p>
          <p>Description: {project.description}</p>
          <p>Owner: {project.owner}</p>
        </div>
      ))}
    </div>
  );
};

export default EntProfile;
