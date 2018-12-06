import React from "react";

const DevProfile = props => {
  console.log(props.skills)
  return (
    <div id="devProfile">
      <img src={props.photoPath} alt="img" width="55%" />
      <ul>
        <li><h4>Skills</h4></li>
        {props.skills.map(skill => {
          console.log(skill)
          return (
            <li>{skill}</li>
          )
        })}
      </ul>
      <div id="profile-icons">
        <div>
          <a href={props.linkedin}><img src="/images/icons/linkedin.svg" width="20%" alt="linkedin" /></a>
        </div>
        <div>
          <a href={props.github}><img src="/images/icons/github-sign.svg" width="20%" alt="github" /></a>
        </div>
      </div>
      <div id="profile-description">
      <p>{props.description}</p>
      </div>
    </div>
  );
};

export default DevProfile;
