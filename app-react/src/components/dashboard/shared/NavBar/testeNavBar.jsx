import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";

export default class MenuExampleInverted extends Component {
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
        <Dropdown
          text="Projects"
          pointing
          className="link item"
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
        >
          <Dropdown.Menu>
            <Dropdown.Item>Dev</Dropdown.Item>
            <Dropdown.Item>Ent</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
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
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}
