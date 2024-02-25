import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <a href="#main">Main</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [scrolltopdata, setscrolltopdata] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 15) {
        setscrolltopdata("");
      } else {
        setscrolltopdata("scrolled");
      }
    });
  }, []);

  return (
    <div className="navwrap">
      <div className="container">
        <div className={`navbar ${scrolltopdata}`}>
          <ul className="links">
            <Menu />
          </ul>
          <div className="toggle-button ">
            {toggleMenu ? (
              <RiCloseLine
                color="#000"
                size={30}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#000"
                size={30}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <ul className="links active">
                <Menu />
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
