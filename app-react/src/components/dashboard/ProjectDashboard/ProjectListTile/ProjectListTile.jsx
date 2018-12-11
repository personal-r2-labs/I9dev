import React from 'react';
import { List } from 'semantic-ui-react';


const ProjectListTile = props => (
  <List.Item>
      <List.Content>
        <List.Header>{props.title}</List.Header>
        {props.category}
        {props.description}
      </List.Content>
  </List.Item>
);

export default ProjectListTile;