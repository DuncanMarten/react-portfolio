import React from "react";
import Project from "../Project";
import projectsList from "./projects.json";

function Porfolio() {

    return(
        <div>
            <h2>Portfolio</h2>
            {projectsList.map((app) => (
                <Project
                    name={app.name}
                    image={app.image}
                    deployed={app.deployed}
                    github={app.github}
                />
            ))}
        </div>
    )
}

export default Porfolio;