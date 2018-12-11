import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails = (props) => {
  console.log(props)

  const getProject = (id) => {
    const theProject = oneProject => {
      return oneProject.id === id;
    }
    return props.projects.find(theProject)
  };
  
  const { params } = props.match;
  const foundProject = getProject(params.id, 10);

  return (
    <div>
      <h2>{ foundProject.title } <span style={{fontSize:"14px"}}>{ foundProject.date }</span></h2>
      <h3>Used technologies: { foundProject.category }</h3>
      <p>{ foundProject.description }</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default ProjectDetails;