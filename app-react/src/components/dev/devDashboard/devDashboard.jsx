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
    console.log(this.state.devProfile);
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
        <div id="dashboard">
          <div className="devDashBoard">
            <DevProfile photoPath={photoPath} name={name} email={email} github={github} linkedin={linkedin} skills={skills} description={description} />
          </div>

          <div className="dashboard-size">
            <div className="dashboard-size-personal">
              <h1 className="dashboard-h1">Jeremy Rose</h1>
              <p>Product Designer</p>
              <span>Ranking</span>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DevDashBoard;
