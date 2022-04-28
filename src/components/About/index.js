import React from "react";

function About() {
  return(
    <section>
    <h2 className="display-4 text-center mb-4">Hi, I'm Caroline!</h2>
      <div className="row justify-content-center">
          <p className="col-md-4 col-sm-12 bio-text">
            Greetings, my name is Caroline Kyle. Welcome to my portfolio website!
            I am a full stack developer with a certification from Vanderbilt University. I 
            have a background in Economics and Data Analytics. Through the Vanderbilt Web Development program, I learned 
            the MERN Stack including technologies such as: JavaScript, React.js, Node.js, Express, PostgreSQL 
            along with other tools and methods to create interactive full stack applications.
            Below you will find links to a few of my GitHub projects that show off my skills in web development as
            well as data analytics. At the bottom of the website is my contact information, please feel free to reach out with any
            inquiries about these projects. Enjoy!
          </p>
          <div className="col-md-4 col-sm-12">
            <img
              src={require('../../assets/images/caroline_smiling.jpg')}
              alt="Caroline Smiling"
              id="profile-image"
              className="bio-img"
            />
          </div>
        </div>
  </section>
  )
}

export default About;