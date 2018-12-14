import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import "./MainImage.css";
import "../../App.css";
import HomeSectionOne from "./HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo";
import Login from "./LoginForm";
import HomeSectionThree from "./HomeSectionThree";
import HomeSectionFour from "./HomeSectionFour";
import HomeSectionFive from "./GoogleMaps";

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Helping others is the best project"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Do you have an idea and you need a hand?"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

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
            style={{ minHeight: 700, padding: "0.01em 0em" }}
            vertical
          >
            <Menu
              id="bgNav"
              fixed={fixed ? "top" : null}
              inverted
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a">i9Dev</Menu.Item>
                <Menu.Item as="a">How it works</Menu.Item>
                <Menu.Item as="a">Projects</Menu.Item>
                <Menu.Item as="a">About us</Menu.Item>
                <Menu.Item position="right">
                  <Button href="login" as="a" inverted={!fixed}>
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
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
          <Menu.Item as="a">i9Dev</Menu.Item>
          <Menu.Item as="a">How it works</Menu.Item>
          <Menu.Item as="a">Projects</Menu.Item>
          <Menu.Item as="a">About us</Menu.Item>
          <Menu.Item as="a">
            <Login inverted />
            {/* <Divider horizontal inverted>
              Or
            </Divider>
            <Button color="facebook">
              <Icon name="facebook" />
            </Button>
            <Button color="twitter">
              <Icon name="twitter" />
            </Button>
            <Button color="grey">
              <Icon name="github" />
            </Button> */}
          </Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            id="bgImage"
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "0em 0em" }}
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
    <HomeSectionOne />
    <HomeSectionTwo />
    <HomeSectionThree />
    <HomeSectionFour />
  </ResponsiveContainer>
);

export default MainHomePage;
