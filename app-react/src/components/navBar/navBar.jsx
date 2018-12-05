import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav id="navBar"className="navbar navbar-expand-lg navbar-light
      ">
        <a className="navbar-brand text-white" href="#">
          i9Dev
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#cardDev">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#footer">
                About
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <a className="nav-link text-white" href="#">
              Signup or Login
            </a>
          </span>
        </div>
      </nav>
      <div id="fix-nav"></div>
    </div>
  );
};

export default NavBar;
