import React, { Component } from 'react';
import { Tab, Form, Button, Icon, Grid, Divider  } from 'semantic-ui-react';
import axios from "axios";
import './SignUp.css';
import TestNavBar from '../../dashboard/shared/NavBar/testeNavBar';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
  }

  handleFormSubmitDev = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    axios
      .post("http://localhost:5000/api/signup", {
        name,
        username: email,
        password,
        role: "dev"
      })
      .then(() => {
        console.log(this.state)
        this.setState({ name: "", username: "", password: "", role: "" });
      })
      .catch(error => console.log(error));
  };

  handleFormSubmitEnt = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    axios
      .post("http://localhost:5000/api/signup", {
        name,
        username: email,
        password,
        role: "ent"
      })
      .then(() => {
        this.setState({ name: "", username: "",  password: "", role: "" });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const panes = [
      { menuItem: 'Developer', render: () => 
        <Tab.Pane>
          <Grid columns='equal'>
            <Grid.Column>
              <Form onSubmit={this.handleFormSubmitDev} size='large'>
                <Form.Group widths='equal'>
                  <Form.Input 
                    fluid
                    name="name"
                    type="text"
                    label="Full Name"
                    placeholder="Your full name"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)} />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)} />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Create a password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)} />
                </Form.Group>
                <Button type="submit" icon labelPosition='right' primary>
                  Submit
                <Icon name='save' />
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column width='1'>
              <Divider vertical>Or</Divider>
            </Grid.Column>
            <Grid.Column id="Signup-Column" verticalAlign="middle">
              <Button id="Signup-Column-Item" color='facebook'>
                <Icon name='facebook' /> Facebook
              </Button>
              <Button id="Signup-Column-Item" color='github'>
                <Icon name='github' /> GitHub
              </Button>
              <Button id="Signup-Column-Item" color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
              </Button>
            </Grid.Column>
          </Grid>
        </Tab.Pane> },
    
      { menuItem: 'Enteprenurship', render: () => 
        <Tab.Pane>
          <Grid columns='equal'>
            <Grid.Column>
            <Form onSubmit={this.handleFormSubmitEnt} size='large'>
              <Form.Group widths='equal'>
              <Form.Input 
                    fluid
                    name="name"
                    type="text"
                    label="Full Name"
                    placeholder="Your full name"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)} />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)} />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Create a password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)} />
                </Form.Group>
                <Button type="submit" icon labelPosition='right' primary>
                  Submit
                  <Icon name='save' />
                </Button>
              </Form>
            </Grid.Column>
              <Grid.Column width={1}>
                <Divider vertical>Or</Divider>
            </Grid.Column>
            <Grid.Column id="Signup-Column" verticalAlign="middle">
              <Button id="Signup-Column-Item" color='facebook'>
                <Icon name='facebook' /> Facebook
              </Button>
              <Button id="Signup-Column-Item" color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
              </Button>
            </Grid.Column>
          </Grid>
        </Tab.Pane> },
    ]
    return(
      <div style={{minWidth:'390px'}}>
      <TestNavBar />
      <Tab panes={panes} />
      </div>
    )
  }
}

export default SignUp;