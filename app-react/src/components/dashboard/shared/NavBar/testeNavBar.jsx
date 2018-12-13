import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

export default class TesteNavBar extends Component {
  state = { activeItem: "i9Dev" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted fluid style={{ minWidth: '390px' }}>
        <Menu.Item
          name="i9Dev"
          as={ Link }
          to="/"
          active={activeItem === "i9Dev"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={ Link }
          name="Projects"
          to="/projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={ Link }
          name="Add Project"
          to="/projects/add"
          active={activeItem === "Add Project"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Dropdown
            text="Guilherme"
            pointing
            className="link item"
            name="user"
            active={activeItem === "user"}
            onClick={this.handleItemClick}
          >
            <Dropdown.Menu>
              <Dropdown.Item as={ Link }
                to="/dev">Profile</Dropdown.Item>
              <Dropdown.Item as={ Link } to="/logout">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}