import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const NavBar1 = () => {
    return (
      <div class="ui inverted menu">
        <a class="active header item">
          i9Dev
        </a>

        <Dropdown text="Projects" className="NavBar-FontColor">
          <Dropdown.Menu>
            <Dropdown.Item text="Search all Projects" />
            <Dropdown.Item text="Search for Developers" />
          </Dropdown.Menu>
        </Dropdown>

        <a class=" header item">
          Find project
        </a>
        <a class=" header item">
          Profile
        </a>
        <a class="header item">
          About us
        </a>
        <div class="right menu">
          <a class="item header">profile name</a>
          <a class="item">Logout</a>
        </div>
      </div>
    )
}

export default NavBar1;