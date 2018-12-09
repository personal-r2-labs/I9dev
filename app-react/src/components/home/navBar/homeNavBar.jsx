import React, { Component } from "react";
import './homeNavBar.css'
import {
  Menu,
  Segment,
  Dropdown,
  MenuItem,
  Button,
  Form,
  Divider
} from "semantic-ui-react";

class HomeNavBar extends Component {
  state = { activeItem: "i9Dev" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment id='color'>
        <Menu inverted pointing secondary attached="top">
          <Menu.Item
            name="i9Dev"
            active={activeItem === "i9Dev"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <MenuItem>
              <Dropdown text="Login">
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Button color="facebook" icon="facebook" />
                    <Button color="grey" icon="github" />
                    <Button color="linkedin" icon="linkedin" />
                    <Divider horizontal>or</Divider>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Form>
                      <Form.Field>
                        <label>Email</label>
                        <input placeholder="Ex: John@Travolta.com" />
                      </Form.Field>
                      <Form.Field>
                        <label>Password</label>
                        <input placeholder="Ex: Swordfish" />
                      </Form.Field>
                      <Form.Field />
                      <Button type="submit">Submit</Button>
                    </Form>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </MenuItem>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default HomeNavBar;
