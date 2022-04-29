import React from "react";
import resume from '../../assets/resume/Caroline_Kyle_2022.pdf'

function Nav(props) {
    const {
        projectsSelected,
        setProjectsSelected,
        contactSelected,
        setContactSelected
    } = props

    return(
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid">
          <p className="text-white display-7 mx-4">Caroline Kyle</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a href="#about" className="nav-link" onClick={() => setContactSelected(false).setProjectsSelected(false)}>About Me</a>
              <a href="#projects" className={`nav-link ${projectsSelected && 'navActive'}`} onClick={() => setProjectsSelected(true)}>Projects</a>
              <a href="#contact" className={`nav-link ${contactSelected && 'navActive'}`} onClick={() => setContactSelected(true)}>Contact</a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav;