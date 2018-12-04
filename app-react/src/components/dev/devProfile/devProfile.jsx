import React from "react";

const DevProfile = props => {
  return (
    <div id="devProfile" className="d-flex justify-content-start">
      <div>
        <div id="first-page">
          <div className="d-flex">
            <img id="imgProfile" src={props.photoPath} alt="img" />
            <div>
              <p>Name: {props.name}</p>
              <p>Email: {props.email}</p>
              <p>Skills: {props.skills}</p>
            </div>
          </div>
          <div id="logos" className="d-flex justify-content-center">
            <a href={props.linkedin}>
              <img src="/images/linkedin-icon.png" width="35%" alt="linkedin" />
            </a>
            <a href={props.github}>
              <img src="/images/github-icon.png" width="20%" alt="github" />
            </a>
          </div>
        </div>
        <div className="d-flex flex-fill">
          <p>Description: {props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DevProfile;
