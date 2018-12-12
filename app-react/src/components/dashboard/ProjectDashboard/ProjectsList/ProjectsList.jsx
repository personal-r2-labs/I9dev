import React from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProjectsList = props => {
  return (
    <List celled>
      <h1>Projects</h1>
      {props.projects.map(project => {
        return (
          <List.Content key={project._id} onClick={() => props.clicked(project._id)}>
          <Link to={`/projects/${project._id}`}><List.Header>{project.title}</List.Header></Link>
              {project.category}
              {project.description}
            </List.Content>
        );
      })}
      <hr/>
    </List>
  );
};

export default ProjectsList;
