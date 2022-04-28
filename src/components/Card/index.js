import React from "react";

function Card({ project }) {
    return(
        <div key={project.name} className="col-sm-12 col-md-6">
        <a href={project.repo} target="_blank">
        <h3>{project.name}</h3>
        <img src={project.pic} alt={project.name}/>
        </a>
        </div>
    );
}

export default Card; 