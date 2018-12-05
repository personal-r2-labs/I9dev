import React from 'react';
import ResultCardProject from '../resultCardProject/resultCardProject'

const ResultProject = (props) => {
  return (
      <div className="d-flex flex-column ">
        {props.projects.map((project, idx) => {
          return <ResultCardProject project={project} key={idx} />
        })}
      </div>
  )
}

export default ResultProject;