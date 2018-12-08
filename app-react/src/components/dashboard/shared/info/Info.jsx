import React from "react";
import { Header, Segment, List, Card, Feed } from "semantic-ui-react";

const Info = props => {
  return (
    <Segment>
      <List>
        <List.Item>
          <List.Header as="h2">Guilherme Davi</List.Header>
          JavaScript, Node, Express, Mongo and React.
        </List.Item>
      </List>

      <List>
        <List.Item icon="users" content="Semantic UI" />
        <List.Item icon="marker" content="New York, NY" />
        <List.Item
          icon="mail"
          content={
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          }
        />
        <List.Item
          icon="linkify"
          content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>}
        />
      </List>

      <List relaxed divided>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">GitHub</List.Header>
            <List.Description as="a">see my repos!</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="facebook" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Faceebok</List.Header>
            <List.Description as="a">Follow me!</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkedin" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Linkedin</List.Header>
            <List.Description as="a">Connect!</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  );
};

export default Info;
