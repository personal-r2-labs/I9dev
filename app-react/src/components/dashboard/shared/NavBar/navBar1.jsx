import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { NavLink }from 'react-router-dom';

const NavBar1 = () => {
    return (
      <div className="ui inverted menu">
        <NavLink to='/' className="active header item">
          i9Dev
        </NavLink>

        <NavLink to='/' className="header item">
          Profile
        </NavLink>

        <Dropdown text='Projects' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>Home Goods</Dropdown.Item>
            <Dropdown.Item>Bedroom</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <NavLink to='/' className="header item">
          About us
        </NavLink>
        <div className="right menu">
          <NavLink to='/' className="item center">Hello! Guilherme Davi</NavLink>
          <NavLink to='/' className="item">Logout</NavLink>
        </div>
      </div>
    )
}

export default NavBar1;