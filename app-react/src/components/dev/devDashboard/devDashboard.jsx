import React, { Component } from "react";
import axios from 'axios';
import DevData from "../../../data/devData.json";
import DevProfileCard from "../devProfileCard/devProfileCard.jsx";
import { Grid, Image, Card, Icon, Segment, List, ListItem, Header } from 'semantic-ui-react';

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
			<Grid id="grid-dashboard">
				<Grid.Column width={5}>
				{/*   <Image src='https://react.semantic-ui.com/images/wireframe/image.png' /> */}
				<DevProfileCard name={name} description={description} photoPath={photoPath} />
				</Grid.Column>
				<Grid.Column width={5}>
				psoakspoak
					<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
				</Grid.Column>
			</Grid>
    );
  }
}
export default DevDashBoard;
