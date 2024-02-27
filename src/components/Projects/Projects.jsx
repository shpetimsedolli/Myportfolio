import React from "react";
import "./Project.css";
import box1 from "../../assets/box1.jpg";
import box2 from "../../assets/box2.jpg";
import box3 from "../../assets/box3.jpg";

const Projects = () => {
  return (
    <div className="container" data-aos="fade-up">
      <h1 className="project__title">Recent Work</h1>
      <div className="project__content">
        <p>
          Here are a few past design projects I've worked on. Want to see more{" "}
        </p>
        <a href="#form">Email me</a>
      </div>
      <div className="boxeswrap">
        <div className="box">
          <img src={box1} alt="" />
          <div className="overlay">
            <div className="overlay__content">
              <h3>TailwindCSS Project</h3>
              <a
                href="https://github.com/shpetimsedolli/tailwindcsproject"
                target="_blank"
                rel="noreferrer"
              >
                View More
              </a>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={box2} alt="" />
          <div className="overlay">
            <div className="overlay__content">
              <h3>ReactJs Project</h3>
              <a
                href="https://github.com/shpetimsedolli/tailwindcsproject"
                target="_blank"
                rel="noreferrer"
              >
                View More
              </a>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={box3} alt="" />
          <div className="overlay">
            <div className="overlay__content">
              <h3>Animation Project</h3>
              <a
                href="https://github.com/shpetimsedolli/tailwindcsproject"
                target="_blank"
                rel="noreferrer"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
