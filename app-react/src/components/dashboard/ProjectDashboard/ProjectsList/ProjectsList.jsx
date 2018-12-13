import React from 'react';
import { Header, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProjectsList = props => {
  return (
  <div>
    <Header as="h1" textAlign="left">Projects</Header>
    {props.projects.map(project => {
      return(
        <Card.Group>
        <Link to={`/projects/${project._id}`}>
        <Card>
        <Card.Content as="a" key={project._id} onClick={() => props.clicked(project._id)}>
            <Card.Header content={project.title} />
            <Card.Meta content={project.sector} />
            <Card.Description content={project.description} />
          </Card.Content>
        </Card>
        </Link>
      </Card.Group>
      )
    })}
  </div>
  );
};

export default ProjectsList;
