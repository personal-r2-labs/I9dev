import React from 'react'


const DevProfile = (props) => {
    return(
        <div>
            <img src={props.photoPath} width="40%" alt="img"/>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>GitHub: {props.github}</p>
            <p>LinkedIn: {props.linkedin}</p>
            <p>Skills: {props.skills}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default DevProfile;