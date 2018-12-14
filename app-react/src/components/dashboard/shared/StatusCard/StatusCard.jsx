import React from "react";
import { Segment, Card } from 'semantic-ui-react';

const StatusCard = () => {
  return (
    <Segment>
      <Card.Group>
        <Card fluid color="green" header="10 Finished projects" />
        <Card fluid color="yellow" header="2 In progress projects" />
        <Card fluid color="red" header="0 Canceled projects" />
      </Card.Group>
    </Segment>
  );
};

export default StatusCard;
