import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProjectResultCard = props => (
  <Card>
    <Card.Content>
      <Link to={`/projects/${props.project._id}`} >
        <Image avatar src={props.project.image} />
      </Link>
    </Card.Content>
    <Card.Content header={props.project.title} />
    <Card.Content description={props.project.description} />
  </Card>
);

export default ProjectResultCard;
