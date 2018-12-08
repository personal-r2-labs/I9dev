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
<<<<<<< HEAD
    } = this.state.devProfile[0];

    let field;
=======
    } = this.state;
    return (
        <section>
          <NavBar1 />
          <div id="dashboard">
            <div class="ui card shadow" id="profile-div">
              <div class="image">
                <img src={photoPath} />
              </div> 
              <div class="content">
                <a class="header">Skills</a>
                <div class="meta">
                  <span class="date">Full-Stack Web Developer</span>
                </div>
                <div class="description">
                  {skills}
                </div>
                <div class="meta">
                  <span class="date">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
              </div>
              <div class="extra content">
                <a>
                  <i class="window restore outline icon"></i>
                  22 Projects
                </a>
              </div>
            </div>
>>>>>>> 8200bccc176ec58d86c977b039c35fb1fa652728

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

<<<<<<< HEAD
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
=======
              <div class="row">
                <div class="ten wide column devDashBoard-profile-margin">
                  <h1>Projetos</h1>
                  <div class="ui card shadow">
                    <div class="content">
                      <div class="header">Projeto Ironhack</div>
                      <div class="meta">
                        <p>Freelance</p>
                        <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</a>
                      </div>
                    </div>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
        </div>
       </section>
>>>>>>> 8200bccc176ec58d86c977b039c35fb1fa652728
    );
  }
}
export default DevDashBoard;
