import React from "react";

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props

    return(
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Caroline Kyle</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a href="#about-me" class="nav-link" onClick={() => setContactSelected(false)}>About Me</a>
              <a href="#work" class="nav-link">Work</a>
              <a href="#contact" class="nav-link" onClick={() => setContactSelected(true)}>Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav;