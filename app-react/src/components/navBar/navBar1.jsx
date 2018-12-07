import React from 'react'

const NavBar1 = () => {
    return (
      <div class="ui inverted menu">
        <a class="active header item">
          i9Dev
        </a>
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