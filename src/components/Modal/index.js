import React from "react";

function Modal({ project, onClose }) {
    const { name, deploy, repo, description, pic } = project;

    return (
        <div className="container">
            <div className="d-flex flex-column">
                <h2 className="display-4 text-center mb-4">{name}</h2>
                <p className="modal-text">{description}</p>
                <img src={pic} alt="project pic" className="bio-img" />
                <div className="justify-content-center">
                    {deploy ? (
                    <a href={deploy} target="_blank" rel="noreferrer"><h4 className="btn display-6 m-2">Visit Website</h4></a>
                        ) : (
                            <></>
                        )}
                    <a href={repo} target="_blank" rel="noreferrer"><h4 className="btn display-6 m-2">Visit Github Repo</h4></a>
                    <button className="btn display-6 m-2" type="button" onClick={onClose}>Go Back to Projects</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;