import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./Main.css";
const Main = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Freelancer"],
    loop: {},
  });
  return (
    <div className="Main">
      <div className="container animate__animated animate__fadeInLeft">
        <span className="top_text">HI!</span>
        <h1>I am Shpetim Sedolli</h1>
        <p className="bottom_text ">
          {text} <Cursor />
        </p>
        <button className="btn-31">
          <span className="text-container">
            <span className="text">Visit my Work!</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Main;
