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
    <div>
    {!isModalOpen ? (
      <>
       <h2 className="display-4 text-center mb-4">My Projects</h2>
       <h2 className="display-6 text-center mb-4">Click on a Project to See More Details</h2>
       <div>
         <div className="row justify-content-center" id="projects">
           {projects.map((project) => (
             <Card project={project} key={project.name} onClick={() => toggleModal(project)} />
           ))}
         </div>
       </div> 
      </>
    ) : (
      <Modal project={currentProject} onClose={toggleModal} />
    )}
  </div>
  );
}

export default Project;