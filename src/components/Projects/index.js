import React, { useState } from "react";
import Modal from "../../components/Modal";
import Card from "../../components/Card"

function Project({ projects }) {
  const [currentProject, setCurrentProject] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (projectInfo) => {
    setCurrentProject({ ...projectInfo });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <Modal project={currentProject} onClose={toggleModal} />}
      <div className="container">
      <h2 className="display-4">Projects</h2>
        <div className="row justify-content-center" id="projects">
          {projects.map((project) => (
            <Card project={project} onClick={() => toggleModal(project)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;