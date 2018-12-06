import React from "react";

const DevProfile = props => {
  return (
    <div id="devProfile" className="d-flex justify-content-start">
      <div>
        <div id="first-page">
            <img id="imgProfile" width="" src={props.photoPath} alt="img" />
            <div>
              <h4>{props.skills}</h4>
          </div>
          <div id="logos" className="d-flex justify-content-around">
              <a href={props.linkedin}>
                <img src="/images/icons/linkedin.svg" width="25%" alt="linkedin" />
              </a>
              <a href={props.github}>
                <img src="/images/icons/github-sign.svg" width="25%" alt="github" />
              </a>
          </div>
        </div>
        <div id='profile-description'>
          <p>{props.description}</p>
        </div>
      </div>
      <div id='second-page'>
      </div>
    </div>
  );
};

export default DevProfile;
