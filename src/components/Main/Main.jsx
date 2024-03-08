import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import video from "../../assets/loop.mp4";

import "./Main.css";
const Main = () => {
  const [text] = useTypewriter({
    words: ["Front End Developer"],
    loop: {},
  });
  return (
    <div className="Main" id="main">
      <video autoPlay src={video} muted loop id="myVideo"></video>
      <div className="container animate__animated animate__fadeInLeft">
        <span className="top_text">HI!</span>
        <h1>I am Shpetim Sedolli</h1>
        <p className="bottom_text ">
          {text} <Cursor />
        </p>
        <a
          className="main__btn"
          href={"https://www.github.com/shpetimsedolli"}
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-31">
            <span className="text-container">
              <span className="text">Visit my Work!</span>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Main;
