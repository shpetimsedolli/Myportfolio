import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine, RiBold } from "react-icons/ri";

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
        <div className="toggle-button ">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={30}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
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
  );
};

export default Navbar;
