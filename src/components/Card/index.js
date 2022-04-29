import React from "react";

function Card({ project, onClick }) {
    return(
        <div key={project.name} className="col-sm-12 col-md-5 project-card">
            <img src={project.pic} alt={project.name}></img>
            <h3 className="project-title" onClick={onClick}>{project.name}</h3>
        </div>
    );
}

export default Card; 