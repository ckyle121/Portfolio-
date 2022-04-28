import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import '@mui/icons-material'

import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import watchSocialPic from './assets/images/WatchSocial.png';
import dreamTeamPic from './assets/images/DreamTeam.png';
import beerBrosPic from './assets/images/Beers&Bros.png';
import notePadPic from './assets/images/Notepad.png'
import socialMediaPic from './assets/images/socialmedia.jpg';

function App() {
  const [projects] = useState([
    {
      name: 'WatchSocial', 
      deploy: 'https://watchsocial.herokuapp.com',
      repo: 'https://github.com/ckyle121/WatchSocial',
      description: 'This application is a CMS-style website where users can review movies and enjoy an unfiltered, non-critic, review of other users using the website.',
      pic: watchSocialPic
    },
    {
      name: 'Dream Team Generator', 
      repo: 'https://github.com/ckyle121/Dream-Team-Generator-',
      description: 'The Team Profile Generator is a command-line-input application run in Node that requests information from the user about members of an engineering team and generates an HTML file displaying that information.',
      pic: dreamTeamPic
    },
    {
      name: 'Beers & Bros', 
      deploy: 'https://ckyle121.github.io/Beers_and_Bros/',
      repo: 'https://github.com/ckyle121/Beers_and_Bros',
      description: 'This application is a CMS-style website where users can review movies and enjoy an unfiltered, non-critic, review of other users using the website.',
      pic: beerBrosPic
    },
    {
      name: 'Notepad', 
      deploy: 'https://notepad-230.herokuapp.com/',
      repo: 'https://github.com/ckyle121/Notepad',
      description: 'An application to write and save note with Express.js back end and will save and retrieve note data from JSON file. The application will allow user to be able to save the notes and will not lose them even they refresh the page.',
      pic: notePadPic
    },
    {
      name: 'Social Media Template', 
      repo: 'https://github.com/ckyle121/Social-Media-Template',
      description: "This is a project provides a template for the APIs on the backend for a social network web application. It allows users to share their thoughts, are able to react to friend's thoughts, and create a friends list. This NoSQL database is designed for social media applications because the database can handle large amounts of unstructured data.",
      pic: socialMediaPic
    },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  
  return (
    <div>
      <Nav
      currentProject={currentProject}
      setCurrentProject={setCurrentProject} 
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      projectsSelected={projectsSelected}
      setProjectsSelected={setProjectsSelected}
      />
      <main>
        {contactSelected ? (
          <>
            <Contact/>
          </>
        ) : projectsSelected ?
        (
          <>
            <Project projects={projects}/>
          </>
        ) : (
          <>
            <About/>
          </>
          )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
