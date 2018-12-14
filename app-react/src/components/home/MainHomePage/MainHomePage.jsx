import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Divider
} from 'semantic-ui-react';
import './MainHomePage.css';
import HomeSectionOne from '../HomeSectionOne/HomeSectionOne';
import HomeSectionTwo from '../HomeSectionTwo/HomeSectionTwo';
import Login from '../LoginForm/LoginForm';
import HomeSectionThree from '../HomeSectionThree/HomeSectionThree';
import HomeSectionFour from '../HomeSectionFour/HomeSectionFour';
import HomepageHeading from '../HomePageHeading/HomePageHeading';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            id="bgImage"
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '0.01em 0em' }}
            vertical
          >
            <NavBar fixed={this.state.fixed} />
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" href="#howitworks" inverted>
            How it works
          </Menu.Item>
          <Menu.Item as={Link} name="Projects" to="/projects" />
          <Link to="#about">
            <Menu.Item>About us</Menu.Item>
          </Link>
          <Menu.Item as="a">
            <Login inverted getUser={this.props.getUser}/>
            <Divider horizontal inverted>
              Or
            </Divider>
            <Button color="facebook" as={Link} to="/auth/facebook">
              {console.log('facebook')}
              <Icon name="facebook" />
            </Button>
            <Button color="twitter">
              <Icon name="twitter" />
            </Button>
            <Button color="grey">
              <Icon name="github" />
            </Button>
          </Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            id="bgImage"
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '0em 0em' }}
            vertical
          >
            <Container id="bgNav">
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">i9Dev</Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const MainHomePage = props => (
  <ResponsiveContainer>
    {console.log(props)}
    <HomeSectionOne />
    <HomeSectionTwo />
    <HomeSectionThree getUser={props.getUser} />
    <HomeSectionFour />
  </ResponsiveContainer>
);

export default MainHomePage;
