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
        <List.Item icon="marker" content={`${props.city}, ${props.country}`} />
        <List.Item
          icon="mail"
          content={
            <a href={`mailto:${props.username}`}>{props.username}</a>
          }
        />
        {props.website ? (
        <List.Item
          icon="linkify"
          content={<a href={`http://${props.website}`}>{props.website}</a>}
        />) : (
          <List.Item
            icon="linkify"
            content={<a href={`http://${props.website}`}>"Add your Website"</a>}
          />)}
      </List>

      <List relaxed divided>
      {props.facebook ? (
        <List.Item>
        <List.Icon name="facebook" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a" href={props.facebook}>Facebook</List.Header>
          <List.Description as="a">Follow me!</List.Description>
        </List.Content>
      </List.Item>
      ) : null 
      }
      {props.linkedin ? (
         <List.Item>
         <List.Icon name="linkedin" size="large" verticalAlign="middle" />
         <List.Content>
           <List.Header as="a" href={props.linkedin}>Linkedin</List.Header>
           <List.Description as="a">Connect!</List.Description>
         </List.Content>
       </List.Item>
      ) : null 
      }
       
      </List>
    </Segment>
  );
};

export default Info;
