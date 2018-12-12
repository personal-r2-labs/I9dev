import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Icon, Header, Segment } from "semantic-ui-react";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", category: "", date: "", description: "" };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, category, date, description } = this.state;
    axios
      .post("http://localhost:5000/api/projects", {
        title,
        category,
        date,
        description
      })
      .then(() => {
        this.setState({ title: "", category: "", date: "", description: "" });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <section>
          <Segment>
          <Form onSubmit={this.handleFormSubmit}>
            <Header as="h2">
              Publish a new Project
              <Header.Subheader>
                Provide the details of the project
              </Header.Subheader>
            </Header>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="title"
                type="text"
                label="Project Name"
                placeholder="Project Name"
                value={this.state.title}
                onChange={e => this.handleChange(e)}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="category"
                type="text"
                label="Category"
                placeholder="Category"
                value={this.state.category}
                onChange={e => this.handleChange(e)}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="date"
                type="date"
                label="Desired Delivery Date"
                placeholder="dd/mm/yyyy"
                value={this.state.date}
                onChange={e => this.handleChange(e)}
              />
            </Form.Group>
            <Form.TextArea
              name="description"
              label="Description"
              placeholder="Tell us about your project"
              value={this.state.description}
              onChange={e => this.handleChange(e)}
            />
            <Button
              primary
              type="submit"
              icon
              labelPosition="right"
              maxLength="300"
            >
              Submit
              <Icon name="save" />
            </Button>
          </Form>
        </Segment>
      </section>
    );
  }
}

export default AddProject;
