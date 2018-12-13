import React from 'react';
import { Card, Image, Grid, Segment } from 'semantic-ui-react';

const ProfileCard = props => {
  return (
    <Grid.Column width={4}>
      <Segment>
        <Card fluid>
          <Image src={props.photo} />
          <Card.Content>
            <Card.Meta>
              <span>{props.office}</span>
            </Card.Meta>
            <Card.Description>{props.description}</Card.Description>
          </Card.Content>
        </Card>
      </Segment>
    </Grid.Column>
  );
};

export default ProfileCard;
