import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";

export default class TesteNavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted style={{minWidth:'390px'}}>
        <Menu.Item
          name="i9Dev"
          active={activeItem === "i9Dev"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="How it works"
          active={activeItem === "How it works"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Projects"
          active={activeItem === "Projects"}
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
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}