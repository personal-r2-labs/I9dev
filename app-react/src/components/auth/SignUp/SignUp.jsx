import React, { Component } from 'react'
import { Tab, Form, Button, Icon, Grid, Divider  } from 'semantic-ui-react'
import axios from "axios";
import '../auth.css'
import TestNavBar from '../../dashboard/shared/NavBar/testeNavBar'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
  }

  handleFormSubmitDev = event => {
    event.preventDefault();
    const { name, password, email } = this.state;
    axios
      .post("http://localhost:5000/api/signup/dev", {
        name,
        username: email,
        password,
      })
      .then(() => {
        this.setState({ username: "", password: "", role: "" });
      })
      .catch(error => console.log(error));
  };

  handleFormSubmitEnt = event => {
    event.preventDefault();
    const { username, password } = this.state;
    axios
      .post("http://localhost:5000/api/signup/ent", {
        username,
        password
      })
      .then(() => {
        this.setState({ username: "",  password: "", role: "ent" });
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
                    name="username"
                    type="text"
                    label="Username"
                    placeholder="Create an username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)} />
                </Form.Group>
                {/* <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)} />
                </Form.Group> */}
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
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
                    name="username"
                    type="text"
                    label="Username"
                    placeholder="Create an username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)} />
                </Form.Group>
                {/* <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)} />
                </Form.Group> */}
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
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