import React from "react";


const ResultCardProject = (props) => {
    return (
        <div id="resultCardProject">
            <a href="#">{props.project.name}</a>
            <p>{props.project.category} | Time Left: {props.project.dateLimit}</p>
            <p>{props.project.description}</p>
            <p>{props.project.owner}</p>
        </div>
    )
}

export default ResultCardProject;