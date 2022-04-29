import React from "react";

function Card({ project, onClick }) {
    return(
        <div key={project.name} className="col-sm-12 col-md-5">
            <div className="project-container m-2">
                <img className="project-img" src={project.pic} alt={project.name}></img>
                <h2 className="project-title display-4" onClick={onClick}>{project.name}</h2>
            </div>
        </div>
    );
}

export default Card; 