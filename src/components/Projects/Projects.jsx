import React from "react";
import "./Project.css";

const Projects = () => {
  return (
    <div className="container">
      <h1 className="project__title">Recent Work</h1>
      <div className="project__content">
        <p>
          Here are a few past design projects I've worked on. Want to see more{" "}
        </p>
        <a href="#form">Email me</a>
      </div>
      <div className="boxeswrap">
        <div className="box">
          <img src="" alt="" />
          <div className="overlay">
            <h3>TailwindCSS Project</h3>
            <a
              href="https://github.com/shpetimsedolli/tailwindcsproject"
              target="_blank"
              rel="noreferrer"
            >
              Hello
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
