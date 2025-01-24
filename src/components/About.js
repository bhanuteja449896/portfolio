import React from "react";
import "./css/About.css";

function About() {
  return (
    <div className="main">
      <div className="about-container">
        {" "}
        <div className="about-me">
          <div className="about">About Me</div>
        </div>
      </div>
      <div className="know-container">
        <div className="know">
          <h1>Know Me More</h1>
        </div>
      </div>
      <div className="expe">
        <div className="matter-container">
          <div className="name-container">
            Hi I'm <div className="matter-name">Bhanu Teja Makkineni</div>
          </div>
          <div className="matter"> As a fresher React.js developer, I have developed 2 projects using React.js and am passionate about building interactive and responsive web applications. My experience has given me a solid foundation in front-end development and an eagerness to learn new technologies.While I am just starting my journey in software development, my enthusiasm and dedication to honing my skills will allow me to contribute to any team effectively. I am confident that my understanding of React.js, along with my commitment to learning and growing as a developer, can bring value to your organization as I continue to develop my technical proficiency.
          </div>
        </div>
        <div className="years">
          <div className="number-container">
            <div className="yellow-cirlce">
              <div className="number">
                <h1>2</h1>
              </div>
            </div>
          </div>
          <div className="projects">Projects</div>
        </div>
      </div>
      <div className="border-line-container">
        <div className="border-line"></div>
      </div>
      <div className="details">
        <div className="name">
          <div className="details-head">Name :</div>
          <div className="details-ans">Bhanu Teja Makkineni</div>
        </div>
        <div className="email">
          <div className="details-head">Email :</div>
          <div className="details-ans">bhanutejamakkineni@gmail.com</div>
        </div>
        <div className="dob">
          <div className="details-head">Date of birth :</div>
          <div className="details-ans">14 MARCH, 2004</div>
        </div>
        <div className="from">
          <div className="details-head">From :</div>
          <div className="details-ans">Hyderabad, India</div>
        </div>
      </div>
    </div>
  );
}

export default About;
