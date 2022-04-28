import React from "react";

function About() {
  return(
    <section>
    <h2 className="display-4 text-center mb-4">Hi, I'm Caroline!</h2>
      <div className="row justify-content-center">
          <div className="col-md-4 col-sm-12 bio-text" >
            <p className="bio-text">
              Greetings, my name is Caroline Kyle. Welcome to my portfolio website!
              I am a full stack developer with a certification from Vanderbilt University. I
              have a background in Economics and Data Analytics. Through the Vanderbilt Web Development program, I learned
              the MERN Stack including technologies such as: JavaScript, React.js, Node.js, Express, PostgreSQL
              along with other tools and methods to create interactive full stack applications.
              Take a look at the projects page! There you will find links to a few of my GitHub projects that show off my skills in web development as
              well as data analytics. Below is my contact information. Please feel free to reach out with any
              inquiries about my projects. Enjoy!
            </p>
            <a href="https://github.com/ckyle121" className="bio-text">GitHub: @ckyle121</a>
            <p className="bio-text">E-Mail: carolinekyle21@gmail.com</p>
          </div>
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