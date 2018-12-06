import React, { Component } from "react";
import axios from 'axios';
import DevProfile from '../devProfile/devProfile';

class DevDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getProfile = () => {
    // const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/projects`)
    .then(responseFromApi => {
      const theProfile = responseFromApi.data;
      this.setState(theProfile);
      console.log(this.state);
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount(){
    this.getProfile();
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
    } = this.state;
    return (
      <section id="section-devDashBoard" className="d-flex align-items-center">
        <div className="devDashBoard">
          <DevProfile
            photoPath={photoPath}
            name={name}
            email={email}
            github={github}
            linkedin={linkedin}
            skills={skills}
            description={description}
          />
        </div>
        <div id="myProjects">
          <div className="myProjects-1">
          </div>
          <div className="myProjects-1">
          </div>
        </div>
      </section>
    );
  }
}
export default DevDashBoard;
