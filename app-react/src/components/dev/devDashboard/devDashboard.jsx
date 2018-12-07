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
      <section id="dashboard">
        <div class="ui card" id="profile-div">
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
              <i class="user icon"></i>
              22 Projects
            </a>
          </div>
        </div>

        <div class="ui internally celled grid">
          <div class="row">         
            <div class="ten wide column devDashBoard-profile-margin">
              <h1>{name}</h1>
              <div class="ui list">
                <div class="item">
                  <i class="users icon"></i>
                  <div class="content">
                    Semantic UI
                  </div>
                </div>
                <div class="item">
                  <i class="marker icon"></i>
                  <div class="content">
                    New York, NY
                  </div>
                </div>
                <div class="item">
                  <i class="mail icon"></i>
                  <div class="content">
                    <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
                  </div>
                </div>
                <div class="item">
                  <i class="linkify icon"></i>
                  <div class="content">
                    <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="ten wide column devDashBoard-profile-margin">
              <h1>Projetos</h1>
              <div class="ui card">
                <div class="content">
                  <div class="header">Projeto Ironhack</div>
                  <div class="meta">
                    <p>Freelance</p>
                    <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</a>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
export default DevDashBoard;
