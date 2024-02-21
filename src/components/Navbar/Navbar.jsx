import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <a href="#main">Main</a>
    <a href="#about">About</a>
    <a href="#portfolio">Portfolio</a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="container">
      <div className="navbar">
        <ul className="links">
          <Menu />
        </ul>
        <div className="toggle-button">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
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
  );
};

export default Navbar;
