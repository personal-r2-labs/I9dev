import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const NavBar1 = () => {
    return (
      <div className="ui inverted menu">
        <a className="active header item">
          i9Dev
        </a>

        <a className="header item">
          Profile
        </a>

        <Dropdown text='Projects' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>Home Goods</Dropdown.Item>
            <Dropdown.Item>Bedroom</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <a className="header item">
          About us
        </a>
        <div className="right menu">
          <a className="item center">Hello! Guilherme Davi</a>
          <a className="item">Logout</a>
        </div>
      </div>
    )
}

export default NavBar1;