import React from 'react';
import ProjectResultCard from '../ProjectResultCard/ProjectResultCard';

const ProjectResult = props => {
  if(props.result !== 0)
    return (
      <div className="d-flex flex-column ">
        {props.projects.map((project) => {
          console.log(project._id)
          return <ProjectResultCard project={project} key={project._id} />;
        })}
      </div>
    );
  else return (
    <div className="d-flex flex-column ">
        {props.allProjects.map((project) => {
          return <ProjectResultCard project={project} key={project.id} />;
        })}
      </div>
  )
  }

export default ProjectResult;
