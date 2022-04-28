import React from "react";
import resume from '../../assets/resume/Caroline_Kyle_2022.pdf'

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props

    return(
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Caroline Kyle</a>
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
              <a href="#about-me" className="nav-link" onClick={() => setContactSelected(false)}>About Me</a>
              <a href="#work" className="nav-link">Work</a>
              <a href="#contact" className={`nav-link ${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}>Contact</span>
             </a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav;