import React, { Component } from "react";
import axios from 'axios';
import DevData from "../../../data/devData.json";
import DevProfileCard from "../devProfileCard/devProfileCard.jsx";
import { Grid, Image, Card, Icon, Segment, List, ListItem, Header } from 'semantic-ui-react';

class DevDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devProfile: DevData,
      isEditing: false,
      initialText: 'Edite aqui'
    };
  }

  handleEditField(event) {
    event.preventDefault();
    console.log(event.target.textContent);
    this.setState({ isEditing: true, initialText: event.target.textContent });
    console.log('editfield', this.state.initialText);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ initialText: event.target.value });
    console.log('Change', this.state.initialText);
  }

  render() {
    const {
      photoPath,
      name,
      email,
      github,
      linkedin,
      skills,
      description
    } = this.state.devProfile[0];

    let field;

    if(this.state.isEditing){
      field = <input type="text" value={this.state.initialText} onChange={event => this.handleChange(event)} />;
    } else {
      field = <div onClick={event => this.handleEditField(event)} className="content"><p>{this.state.initialText}</p></div>;
    }

    return (
      <Grid columns={2} basic>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src='/images/wireframe/media-paragraph.png' />
          <DevProfileCard name={name} photoPath={photoPath} description={description} />
        </Grid.Column>

        <Grid.Column>
          <Grid.Row >

          <List>
            <List.Item className="margin-top">
              <List.Icon name='users' />
              <List.Content>Semantic UI</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='marker' />
              <List.Content>New York, NY</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='mail' />
              <List.Content>
                <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
              </List.Content>
            </List.Item>
          </List>

          </Grid.Row>
          <Grid.Row id="address">
            <List>
              <List.Item>
                <List.Header as='h3'>Address:</List.Header>
                <ListItem>Rua Ivai, 277</ListItem>
                <ListItem>Tatuapé</ListItem>
                <ListItem>São Paulo - SP</ListItem>
                <ListItem>Brazil</ListItem>
              </List.Item>
            </List>
          </Grid.Row>
        </Grid.Column>

      </Grid.Row>
  
    </Grid>
    );
  }
}
export default DevDashBoard;
