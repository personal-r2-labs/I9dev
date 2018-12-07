import React, { Component } from "react";
import DevData from "../../../data/devData.json";
import NavBar1 from "../../navBar/navBar1";
import DevProfile from "../devProfile/devProfile.jsx";
import DevCardInfo from "../devProfile/devCardInfo.jsx";
import Container from "../devProfile/container.jsx";

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
          <Container name={name} email={email} skills={skills} photoPath={photoPath} field={field}/>
       </section>
    );
  }
}

export default DevDashBoard;
