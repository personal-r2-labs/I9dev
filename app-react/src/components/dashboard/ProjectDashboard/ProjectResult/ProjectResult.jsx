import React from 'react';
import ProjectResultCard from '../ProjectResultCard/ProjectResultCard';

const ProjectResult = props => {
  console.log(props);
    return (
      <div className="d-flex flex-column ">
        {props.projects.map((project, idx) => {
          return <ProjectResultCard project={project} key={idx} />;
        })}
      </div>
    );
  }

export default ProjectResult;
