import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Segment, Header, Button, Grid } from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedProject: {
        title: "",
        description: "",
        sector: "",
        date: ""
      }
    };
  }

  componentDidMount() {
    this.loadData();
    console.log(this.props);
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedProject ||
        (this.state.loadedProject &&
          this.state.loadedProject._id !== this.props.match.params.id)
      ) {
        const { params } = this.props.match;
        console.log(this.props)
        axios
          .get(`http://localhost:5000/api/projects/${params.id}`)
          .then(responseFromApi => {
            const loadedProject = responseFromApi.data;
            this.setState({ loadedProject });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

  render() {
    return (
      <Segment stacked>
        <Header as="h1" style={{marginLeft:"0.5em"}}>
          <Header.Subheader>Title</Header.Subheader>
          {this.state.loadedProject.title}
        </Header>
        <Grid columns={2} padded stacked>
          <Grid.Column width={8}>
            <Header as="h1">
              <Header.Subheader>Sector</Header.Subheader>
              {this.state.loadedProject.sector}
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <Header.Subheader>Created</Header.Subheader>2 weeks ago
            </Header>
          </Grid.Column>
        </Grid>

        <Grid columns={2} padded>
          <Grid.Column width={8}>
            <Header as="h1">
              <Header.Subheader>Deadline</Header.Subheader>
              12/15/2018
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <Header.Subheader>Created by</Header.Subheader>John Connor
            </Header>
          </Grid.Column>
        </Grid>

        <Header as="h2" style={{marginLeft:"0.5em"}}>
          <HeaderSubHeader>Description</HeaderSubHeader>
          {this.state.loadedProject.description}
        </Header>
        <Button primary>Send a Propost</Button>
      </Segment>
      /*       <div>
        <h2>{this.state.loadedProject.title}</h2>
        <h3>Category: {this.state.loadedProject.category}</h3>
        <h4>Description</h4>
        <p>{this.state.loadedProject.description}</p>
        <button>Send a Propost</button>
      </div> */
    );
  }
}

export default ProjectDetails;
