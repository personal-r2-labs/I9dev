import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthService from '../../../auth/auth-service';
import Loader from '../../shared/Loader/Loader'

export default class NavBarLogged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'i9Dev',
      loggedInUser: null
    };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps['userInSession'] });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    if (this.props.userInSession) {
      return (
        <Menu inverted fluid style={{ minWidth: '390px' }}>
          <Menu.Item
            name="i9Dev"
            as={Link}
            to="/"
            active={activeItem === 'i9Dev'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            name="Projects"
            to="/projects"
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            name="Add Project"
            to="/projects/add"
            active={activeItem === 'Add Project'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Dropdown
              text={this.props.userInSession.name}
              pointing
              className="link item"
              name="user"
              active={activeItem === 'user'}
              onClick={this.handleItemClick}
            >
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/user/${this.props.userInSession._id}`}
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.logoutUser()}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      );
    } else {
      return (
        <Loader />
      );
    }
  }
}
