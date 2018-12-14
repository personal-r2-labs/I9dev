import React, { Component } from "react";
import ProfileCard from "../shared/ProfileCard/ProfileCard";
import Info from "../shared/info/Info";
import { Grid, GridColumn } from "semantic-ui-react";
import LastProjects from "../shared/lastProjects/LastProjects";
import StatusCard from "../shared/statusCard/StatusCard";
import TesteNavBar from "../shared/NavBar/testeNavBar"

class DevDashBoard extends Component {
//   constructor(props) {
//     super(props);
//     this.state()
//  }

//    handleEditField(event) {
//     event.preventDefault();
//     console.log(event.target.textContent);
//     this.setState({ isEditing: true, initialText: event.target.textContent });
//     console.log('editfield', this.state.initialText);
//   }

//   handleChange(event) {
//     event.preventDefault();
//     this.setState({ initialText: event.target.value });
//   }


  render() {
    /*     const {
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
    } */
    return (
      <div>
        <TesteNavBar />
        <Grid columns={3} id="grid" stackable container doubling>
          <Grid.Row>
            <ProfileCard />
            <Grid.Column width={7}>
              <Info />
              <StatusCard />
            </Grid.Column>
            <GridColumn width={5}>
              <LastProjects />
            </GridColumn>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default DevDashBoard;
