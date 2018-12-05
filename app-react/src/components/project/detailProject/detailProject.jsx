import React from 'react';

const DetailProject = props => {
  return (
    <div>
      <a href="#">{props.project.name}</a>
      <p>{props.project.datelimit}</p>
      <img src={props.project.filePath} alt="Project Logo" />
      <p>{props.project.category}</p>
      <p>{props.project.description}</p>
      <p>{props.project.status}</p>
    </div>
  );
};

export default DetailProject;
