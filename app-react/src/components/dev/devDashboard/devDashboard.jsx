import React, { Component } from "react";
import axios from 'axios';
import DevProfile from '../devProfile/devProfile';

class DevDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getDev = () => {
    // const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/dev`)
      .then(responseFromApi => {
        const theDev = responseFromApi.data;
        this.setState({ devProfile: theDev });
        // console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getDev();
  }

  setDev = () => {
    axios.post('http://localhost:5000/api/')
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
      <section id="section-devDashBoard" className="d-flex align-items-center justify-content-center">
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
          <h2>Meus projetos</h2>
          </div>
          <div className="myProjects-1">
          <h2>qualquer outra coisa</h2>
          </div>
        </div>
      </section>
    );
  }
}
export default DevDashBoard;
