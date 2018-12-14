import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <Menu
      id="bgNav"
      fixed={props.fixed ? "top" : null}
      inverted={!props.fixed}
      pointing={!props.fixed}
      secondary={!props.fixed}
      size="large"
    >
      <Container>
        <Menu.Item as={Link} name="home" to="/">
          i9Dev
        </Menu.Item>
        <Menu.Item as="a" href="#howitworks" inverted={!props.fixed}>
          How it works
        </Menu.Item>
        <Menu.Item as={Link} name="Projects" to="/projects" />
        <Menu.Item as="a" href="#about">
          About us
        </Menu.Item>
        <Menu.Item position="right">
          <Button inverted={!props.fixed} as="a" href="#login">
            Log in
          </Button>
          <Button
            as={Link}
            to="/signup"
            inverted={!props.fixed}
            primary={props.fixed}
            style={{ marginLeft: "0.5em" }}
          >
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
