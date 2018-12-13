import React, { Component } from 'react';
import axios from 'axios';
import './UserDashboard.css';

import ProfileCard from '../shared/ProfileCard/ProfileCard';
import Info from '../shared/info/Info';
import { Grid, GridColumn } from 'semantic-ui-react';
import LastProjects from '../shared/lastProjects/LastProjects';
import StatusCard from '../shared/statusCard/StatusCard';
import NavBar from '../shared/NavBarLogged/NavBarLogged';

class UserDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedProfile: {
        photoPath: '',
        name: '',
        username: '',
        office: '',
        city: '',
        state: '',
        githubURL: '',
        linkedinURL: '',
        facebookURL: '',
        websiteURL: '',
        skills: [],
        description: '',
        role: ''
      }
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedProfile ||
        (this.state.loadedProfile &&
          this.state.loadedProfile._id !== this.props.match.params.id)
      ) {
        const { params } = this.props.match;
        axios
          .get(`http://localhost:5000/api/user/${params.id}`)
          .then(responseFromApi => {
            const loadedProfile = responseFromApi.data;
            this.setState({ loadedProfile });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

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
    const {
      photoPath,
      name,
      username,
      office,
      githubURL,
      linkedinURL,
      facebookURL,
      websiteURL,
      skills,
      description,
      role
    } = this.state.loadedProfile;

    // let field;

    // if(this.state.isEditing){
    //   field = <input type="text" value={this.state.initialText} onChange={event => this.handleChange(event)} />;
    // } else {
    //   field = <div onClick={event => this.handleEditField(event)} className="content"><p>{this.state.initialText}</p></div>;
    // } */
    if (role === 'dev') {
      return (
        <div>
          <NavBar />
          <Grid columns={3} id="grid" stackable container doubling>
            <Grid.Row>
              <ProfileCard photo={photoPath} office={office} description={description}/>
              <Grid.Column width={7}>
                <Info name={name} skills={skills} username={username} website={websiteURL} github={githubURL} facebook={facebookURL} linkedin={linkedinURL}/>
                <StatusCard />
              </Grid.Column>
              <GridColumn width={5}>
                <LastProjects />
              </GridColumn>
            </Grid.Row>
          </Grid>
        </div>
      );
    } else if (role === 'ent') {
    } else if (role === 'admin') {
    } else {
      return <div>Carregando...</div>;
    }
  }
}

export default UserDashBoard;
