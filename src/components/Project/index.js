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
                        <strong>Deployed: </strong> {props.deployed}
                    </li>
                    <li>
                        <strong>GitHub: </strong> {props.github}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Project;