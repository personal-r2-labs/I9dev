import React from "react";


const ResultCardProject = (props) => {
    return (
        <div className="resultCardProject" style={{border: "1px solid red"}}>
            <a href="#">{props.project.name}</a>
            <p>{props.project.category} | Time Left: {props.project.dateLimit}</p>
            <p>{props.project.description}</p>
            <p>{props.project.owner}</p>
        </div>
    )
}

export default ResultCardProject;