import React, { Component } from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    axios
      .post("http://localhost:5000/api/login", {
        username,
        password
      })
      .then(() => {
        this.setState({ username: "", password: "" });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
        <Grid.Column width={10}>
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Field>
              <Form.Input
                fluid
                name="username"
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
              />
              <Form.Input
                fluid
                name="password"
                type="password"
                placeholder="User password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
              />
            </Form.Field>
            <Button type="submit" primary>
              Get in!
            </Button>
          </Form>
        </Grid.Column>
    );
  }
}

export default Login;
