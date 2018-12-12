import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedProject: {
        title: '',
        description: '',
        category: '',
        date: '',
      }
    };
  }

  componentDidMount() {
    this.loadData();
    console.log(this.props);
  }

  componentDidUpdate() {
    this.loadData();
    console.log(this.state.loadedProject);
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedProject ||
        (this.state.loadedProject &&
          this.state.loadedProject._id !== this.props.match.params.id)
      ) {
        const { params } = this.props.match;
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
      <div>
        <h2>{this.state.loadedProject.title}</h2>
        <h3>Category: {this.state.loadedProject.category}</h3>
        <h4>Description</h4>
        <p>{this.state.loadedProject.description}</p>
        <button>Send a Propost</button>
      </div>
    );
  }
}

export default ProjectDetails;
