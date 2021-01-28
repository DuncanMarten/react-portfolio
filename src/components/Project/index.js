import React from "react";

function Project(props) {
    return (
        <div>
            <div>
                <img alt={props.name} src={props.image}></img>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name: </strong> {props.name}
                    </li>
                    <li>
                        <a href={props.deployed} target="_blank" rel="noreferrer"><strong>Deployed</strong></a>
                    </li>
                    <li>
                        <a href={props.github} target="_blank" rel="noreferrer"><strong>GitHub Repository</strong></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Project;