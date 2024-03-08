import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = ({ onCloseMenu }) => (
  <>
    <a href="#main" onClick={onCloseMenu}>
      Main
    </a>
    <a href="#about" onClick={onCloseMenu}>
      About
    </a>
    <a href="#skills" onClick={onCloseMenu}>
      Skills
    </a>
    <a href="#contact" onClick={onCloseMenu}>
      Contact
    </a>
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

  const handleCloseMenu = () => {
    setToggleMenu(false);
  };

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
                className="closeline"
                color="#fff"
                size={32}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={32}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <ul className="links active">
                <Menu onCloseMenu={handleCloseMenu} />
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
