import React, { Component } from "react";
import DevProfile from "../devProfile/devProfile";
import DevData from "../../../data/devData.json";
import NavBar1 from "../../navBar/navBar1";

class DevDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devProfile: DevData,
      isEditing: false,
      initialText: 'Edite aqui'
    };
  }

  handleEditField(event) {
    event.preventDefault();
    console.log(event.target.textContent);
    this.setState({ isEditing: true, initialText: event.target.textContent });
    console.log('editfield', this.state.initialText);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ initialText: event.target.value });
    console.log('Change', this.state.initialText);
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
    } = this.state.devProfile[0];

    let field;

    if(this.state.isEditing){
      field = <input type="text" value={this.state.initialText} onChange={event => this.handleChange(event)} />;
    } else {
      field = <div onClick={event => this.handleEditField(event)} className="content"><p>{this.state.initialText}</p></div>;
    }

    return (
        <section>
          <NavBar1 />
          <div id="dashboard">
            <div className="ui card shadow" id="profile-div">
              <div className="image">
                <img src={photoPath} />
              </div> 
              <div className="content">
                <a className="header">Skills</a>
                <div className="meta">
                  <span className="date">Full-Stack Web Developer</span>
                </div>
                <div className="description">
                  {skills}
                </div>
                <div className="meta">
                  <span className="date">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="window restore outline icon"></i>
                  22 Projects
                </a>
              </div>
            </div>

            <div className="ui internally celled grid">
              <div className="row">
                <div className="ten wide column devDashBoard-profile-margin">
                  <h1>{name}</h1>
                  <div className="ui list">
                    <div className="item">
                      <i className="users icon"></i>
                      {field}
                    </div>
                    <div className="item">
                      <i className="marker icon"></i>
                      <div className="content">
                        New York, NY
                      </div>
                    </div>
                    <div className="item">
                      <i className="mail icon"></i>
                      <div className="content">
                        <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="linkify icon"></i>
                      <div className="content">
                        <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="ten wide column devDashBoard-profile-margin">
                  <h1>Projetos</h1>
                  <div className="ui card shadow">
                    <div className="content">
                      <div className="header">Projeto Ironhack</div>
                      <div className="meta">
                        <p>Freelance</p>
                        <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</a>
                      </div>
                    </div>
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
