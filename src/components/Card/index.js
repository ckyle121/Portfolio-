import React from "react";

function Card({ project, onClick }) {
    return(
        <div key={project.name}  className="col-sm-12 col-md-4">
            <div className="project-container">
                <img src={project.pic} alt={project.name} onClick={onClick}></img>
                <div className="project-title bg-dark bg-opacity-50 rounded p-2">
                    <h2 className="text-white display-4" onClick={onClick}>{project.name}</h2>
                    <h4 className="display-7">{project.languages}</h4>
                </div>
            </div>
        </div>
    );
}

export default Card; 