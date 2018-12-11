import React from 'react';
import ProjectListTile from '../ProjectListTile/ProjectListTile';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProjectsList = props => {
  return (
    <List celled>
      {props.projects.map(project => {
        return (
          <Link to={`/projects/${project._id}`}>
            <ProjectListTile
              title={project.title}
              category={project.category}
              description={project.description}
              key={project._id}
              clicked={() => props.clicked(project._id)}
            />
          </Link>
        );
      })}
    </List>
  );
};

export default ProjectsList;
