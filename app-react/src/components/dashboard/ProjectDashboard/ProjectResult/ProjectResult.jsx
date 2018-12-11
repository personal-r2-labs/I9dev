import React from 'react';
import ProjectResultCard from '../ProjectResultCard/ProjectResultCard';

const ProjectResult = props => {
  return (
    <div className="d-flex flex-column ">
      {props.projects.map(project => {
        console.log(project._id);
        return <ProjectResultCard project={project} key={project._id} />;
      })}
    </div>
  );
};

export default ProjectResult;
