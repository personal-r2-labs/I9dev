import React from "react";

const DevProfile = props => {
  console.log(props.skills)
  return (
    <div className="ui card shadow" id="profile-div">
      <div className="image">
        <img src={props.photoPath} />
      </div> 
        <div className="content">
          <a className="header">Skills</a>
            <div className="meta">
            <span className="date">Full-Stack Web Developer</span>
        </div>
        <div className="description">
          {props.skills}
        </div>
        <div className="meta">
          <span className="date">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        </div>
        </div>
        <div className="extra content">
          <a><i className="window restore outline icon"></i>22 Projects</a>
        </div>
    </div>
  );
};

export default DevProfile;
