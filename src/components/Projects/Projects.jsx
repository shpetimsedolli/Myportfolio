import React, { useState } from "react";
import "./Project.css";
import box1 from "../../assets/box1.jpg";
import box2 from "../../assets/box2.jpg";
import box3 from "../../assets/box3.jpg";
import box4 from "../../assets/box4.jpg";
import box5 from "../../assets/box5.jpg";
import box6 from "../../assets/box6.jpg";
import box1click from "../../assets/box1click.png";
import box2click from "../../assets/box2click.png";
import box3click from "../../assets/box3click.png";
import box4click from "../../assets/box4click.png";
import box5click from "../../assets/box5click.png";

const Popup = ({ image, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <img src={image} className="popup-image" onClick={onClose} alt="" />
        <h1 className="text-overlay">Click Anywhere on Image to Close</h1>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const togglePopup = (image) => {
    setSelectedImage(image);
    setShowPopup(!showPopup);
  };

  return (
    <>
      {showPopup && (
        <Popup image={selectedImage} onClose={() => setShowPopup(false)} />
      )}
      <div className="container" data-aos="fade-up">
        {/* Pass selectedImage and toggle function */}
        <h1 className="project__title">Recent Work</h1>
        <div className="project__content">
          <p>
            Here are a few past design projects I've worked on. Want to see more
          </p>
          <a href="#contact">Email me</a>
        </div>
        <div className="boxeswrap">
          <div className="box" data-aos="fade-right">
            <img src={box5} alt="" />
            <div className="overlay">
              <div className="overlay__content">
                <h3>Ecommerce using TailwindCSS</h3>
                <a
                  className="btn_github"
                  href="https://github.com/shpetimsedolli/ecommerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code on Github
                </a>
                <button
                  className="btn_github"
                  onClick={() => togglePopup(box1click)}
                >
                  Show Full Image
                </button>
              </div>
            </div>
          </div>
          <div className="box" data-aos="fade-left">
            <img src={box1} alt="" />
            <div className="overlay">
              <div className="overlay__content">
                <h3>Real data Using TailwindCSS</h3>
                <a
                  className="btn_github"
                  href="https://github.com/shpetimsedolli/tailwindcsproject"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code on Github
                </a>
                <button
                  className="btn_github"
                  onClick={() => togglePopup(box2click)}
                >
                  Show Full Image
                </button>
              </div>
            </div>
          </div>
          <div className="box" data-aos="fade-right">
            <img src={box4} alt="" />
            <div className="overlay">
              <div className="overlay__content">
                <h3>HooBank React/Tailwind</h3>
                <a
                  className="btn_github"
                  href="https://github.com/shpetimsedolli/tailwindcsproject"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code on Github
                </a>
                <button
                  className="btn_github"
                  onClick={() => togglePopup(box3click)}
                >
                  Show Full Image
                </button>
              </div>
            </div>
          </div>
          <div className="box" data-aos="fade-left">
            <img src={box2} alt="" />
            <div className="overlay">
              <div className="overlay__content">
                <h3>ReactJs Project</h3>
                <a
                  className="btn_github"
                  href="https://github.com/shpetimsedolli/tailwindcsproject"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code on Github
                </a>
                <button
                  className="btn_github"
                  onClick={() => togglePopup(box4click)}
                >
                  Show Full Image
                </button>
              </div>
            </div>
          </div>
          <div className="box" data-aos="fade-right">
            <img src={box3} alt="" />
            <div className="overlay">
              <div className="overlay__content">
                <h3>Animation Project</h3>
                <a
                  className="btn_github"
                  href="https://github.com/shpetimsedolli/tailwindcsproject"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code on Github
                </a>
                <button
                  className="btn_github"
                  onClick={() => togglePopup(box5click)}
                >
                  Show Full Image
                </button>
              </div>
            </div>
          </div>
          <div className="box" data-aos="fade-left">
            <img src={box6} alt="" />
            <div className="overlay">
              <div className="overlay__content">
                <h3>WeatherApp</h3>
                <a
                  className="btn_github"
                  href="https://github.com/shpetimsedolli/weatherapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code on Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
