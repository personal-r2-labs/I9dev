import React from 'react'

const NavBar1 = () => {
    return (
      <div className="ui inverted menu">
        <a className="active header item">
          i9Dev
        </a>
        <div class="two fields">
          <select class="ui fluid dropdown">
            <option value="">Projects</option>
            <option value="FP">Find Projects</option>
            <option value="FD">Find Developers</option>
          </select>
        </div>
        <a class=" header item">
          Find project
        </a>
        <a className=" header item">
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