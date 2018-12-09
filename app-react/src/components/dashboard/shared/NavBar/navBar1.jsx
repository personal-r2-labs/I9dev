import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const NavBar1 = () => {
    return (
      <div className="ui inverted menu">
        <a className="active header item">
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
        <a className="header item">
          Profile
        </a>
        <a className="header item">
          About us
        </a>
        <div className="right menu">
          <a className="item header">profile name</a>
          <a className="item">Logout</a>
        </div>
      </div>
    )
}

export default NavBar1;