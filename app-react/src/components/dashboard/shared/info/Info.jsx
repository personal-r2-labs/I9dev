import React from "react";
import { Segment, List } from "semantic-ui-react";

const Info = props => {
  return (
    <Segment>
      <List>
        <List.Item>
          <List.Header as="h2">{props.name}</List.Header>
        {props.skills.join(' | ')}
        </List.Item>
      </List>

      <List>
        <List.Item icon="marker" content={`${'Islamabad, PK'}`} />
        <List.Item
          icon="mail"
          content={
            <a href={`mailto:${props.username}`}>{props.username}</a>
          }
        />
        <List.Item
          icon="linkify"
          content={<a href={`http://${props.website}`}>{props.website}</a>}
        />
      </List>

      <List relaxed divided>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a" href={props.github}>GitHub</List.Header>
            <List.Description>see my repos!</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="facebook" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Facebook</List.Header>
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
