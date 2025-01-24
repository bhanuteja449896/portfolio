import React from "react";
import ReactJs from "./assests/react-native.png";
import NodeJs from "./assests/nodejs.png";
import Github from "./assests/github.png";
import Java from "./assests/java.png";
import Js from "./assests/js.png";
import Python from "./assests/python.png";
import Spring from "./assests/springboot.png";
import Firebase from "./assests/firebase.png";

import "./css/TechIKnow.css"; // Make sure the CSS file exists

function TechIKnow() {
  const techs = [
    {
      title: "Python",
      image: Python,
      description:
        "Python is a versatile language known for its simplicity and readability. It powers applications across data science, web development, AI, and automation, making it a popular choice for developers.",
    },
    {
      title: "Java",
      image: Java,
      description:
        'Java is an object-oriented language used in web, mobile, and enterprise applications. Its "write once, run anywhere" capability makes it highly portable, especially for large-scale systems and Android apps.',
      },
      {
        title: "GitHub",
        image: Github,
        description:
          "GitHub is a platform for version control and collaboration, built on Git. It helps developers manage repositories, track changes, and work together efficiently on software projects.",
      },
    {
      title: "React Js",
      image: ReactJs,
      description:
        "React JS allows developers to build Web applications using JavaScript and React. React provides a set of components that can be customized and combined to create complex user interfaces. It also offers performance optimization features for smooth web apps.",
    },
    {
      title: "Node Js",
      image: NodeJs,
      description:
        "Node.js allows developers to build scalable, fast, and efficient network applications. With its event-driven and non-blocking I/O model, it provides high performance and scalability for web applications.",
    },
    {
      title: "JavaScript",
      image: Js,
      description:
        "JavaScript is essential for building dynamic web applications. Used for both client-side and server-side development, it helps handle events, manage state, and build user interfaces efficiently.",
    },
    {
      title: "Spring Boot",
      image: Spring,
      description:
        "Spring Boot simplifies Java development by offering a pre-built framework with configuration and setup. It allows developers to build enterprise-grade applications quickly and efficiently.",
    },
    {
      title: "Firebase",
      image: Firebase,
      description: "Firebase offers real-time databases, authentication, and hosting, enabling fast, scalable web and mobile app development with minimal effort."
    }
  ];

  return (
    <div className="tech-container">
      <div className="know-container">
        <div className="whatIknow">
          What I Know
        </div>
      </div>
      <div className="technologies">Technologies I Know</div>
      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div key={index} className="tech-card">
            <img
              src={tech.image}
              alt={`${tech.title} logo`}
              className="tech-image"
            />
            <div className="tech-title">{tech.title}</div>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechIKnow;
