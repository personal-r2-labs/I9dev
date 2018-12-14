import React, { Component } from 'react';
import './UserDashboard.css';

import ProfileCard from '../shared/ProfileCard/ProfileCard';
import Info from '../shared/Info/Info';
import { Grid, GridColumn } from 'semantic-ui-react';
import LastProjects from '../shared/LastProjects/LastProjects';
import StatusCard from '../shared/StatusCard/StatusCard';
import Loader from '../shared/Loader/Loader';

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
        country: '',
        linkedinURL: '',
        facebookURL: '',
        websiteURL: '',
        skills: [],
        description: '',
        role: ''
      },
    };
  }

  componentDidMount() {
    this.setState({ loadedProfile: this.props.loggedInUser });
  }

  render() {
    const {
      photoPath,
      name,
      username,
      office,
      city,
      country,
      linkedinURL,
      facebookURL,
      websiteURL,
      skills,
      description,
      role,
    } = this.state.loadedProfile;

    if (role === 'dev') {
      return (
        <div>
          <Grid columns={3} id="grid" stackable container doubling>
            <Grid.Row>
              <ProfileCard photo={photoPath} office={office} description={description}/>
              <Grid.Column width={7}>
                <Info name={name} skills={skills} city={city} country={country} username={username} website={websiteURL} facebook={facebookURL} linkedin={linkedinURL}/>
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
      return(
        <div>
          <Grid columns={3} id="grid" stackable container doubling>
            <Grid.Row>
              <ProfileCard photo={photoPath} office={office} description={description}/>
              <Grid.Column width={7}>
                <Info name={name} skills={skills} city={city} country={country} username={username} website={websiteURL} facebook={facebookURL} linkedin={linkedinURL}/>
                <StatusCard  />
              </Grid.Column>
              <GridColumn width={5}>
                <LastProjects  />
              </GridColumn>
            </Grid.Row>
          </Grid>
        </div>
      )
    } else {
      return <Loader />;
    }
  }
}

export default UserDashBoard;
