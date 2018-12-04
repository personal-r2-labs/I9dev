import React from 'react';
import ResultCardProject from '../resultCardProject/resultCardProject'

const ResultProject = (props) => {
  return (
      <div>
        {props.projects.map((project, idx) => {
          return <ResultCardProject project={project} key={idx} />
        })}
      </div>
  )
}

export default ResultProject;