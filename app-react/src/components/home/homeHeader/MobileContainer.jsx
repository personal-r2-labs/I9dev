import React, { Component } from "react";
import {
  Responsive,
  Menu,
  Segment,
  Container,
  Button,
  Sidebar,
  Icon
} from "semantic-ui-react";
import PropTypes from "prop-types";
import HomeHeader from "./HomeHeader";
import HomeHeaderResponsive from "./HomeHeaderResponsive";

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
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            id="backgroundMainImage"
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "0em" }}
            vertical
          >
            <Container>
              <Menu id="navBg" inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                 i9Dev
                </Menu.Item>
              </Menu>
            </Container>
            <HomeHeader mobile />
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
     <HomeHeaderResponsive>{children}</HomeHeaderResponsive>
{/*      <MobileContainer>{children}</MobileContainer>
 */}  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default MobileContainer;
