import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProjectDetails extends Component {
  constructor(props){
      super(props);
      this.state = {
        project: {
          title: '',
          description:''
        }
      };
  }

  componentDidMount(){
      this.getSingleProject();
  }

  getSingleProject = () => {
    console.log('[ProjectDetails.js] getSingleProject', this.props.match);
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/api/projects/${params.id}`)
      .then( responseFromApi =>{
          const theProject = responseFromApi.data;
          this.setState({project: theProject});
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  render(){
    console.log(this.state);
    return(
      <div>
        <h1>{this.state.project.title}</h1>
        <p>{this.state.project.description}</p>
        <Link to={'/projects'}>Back to projects</Link>
      </div>
    )
  }
}

export default ProjectDetails;