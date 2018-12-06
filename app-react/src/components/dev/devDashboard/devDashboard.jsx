import React, { Component } from "react";
import DevProfile from "../devProfile/devProfile";
import DevData from "../../../data/devData.json";
import NavBarInside from '../../navBar/navBarInside'

class DevDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devProfile: DevData
    };
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
    return (
      <section id="section-devDashBoard">
        <NavBarInside />
        <div id="dashBoard">
          <div className="left-profile">
            <DevProfile photoPath={photoPath} name={name} email={email} github={github} linkedin={linkedin} skills={skills} description={description} />
          </div>

          <div className="right-profile">
            <div className="profile-info">
              <h1>{name}</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DevDashBoard;
