import React from 'react'

const NavBar1 = () => {
    return (
      <div className="ui inverted menu">
        <a className="active header item">
          i9Dev
        </a>
        <a className="header item">
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