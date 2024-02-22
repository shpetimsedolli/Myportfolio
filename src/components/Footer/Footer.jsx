import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="footerwrap">
          <p>Copyright 2024 © , This Project is created with REACTJS</p>
          <div className="social__icons">
            <a
              href="https://www.facebook.com/shsedolli"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/shpetimsedolli"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.github.com/shpetimsedolli"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
