import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import "./Nav.css";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowCloseButton(!showCloseButton);
  };

  const handleCloseClick = () => {
    setShowMenu(false);
    setShowCloseButton(false);
  };

  const menuAnimation = useSpring({
    transform: showMenu ? "scale(1)" : "scale(0)",
  });

  return (
    <nav id="nav">
      <div className="menu-container">
        <a href="#inicio">INICIO</a>
        <button
          className={`btn-menu d-lg-none ${
            showCloseButton ? "hidden" : "block"
          }`}
          onClick={handleMenuClick}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        <animated.ul
          style={menuAnimation}
          className={`d-md-flex ${showMenu ? "show" : "hidden"}`}
        >
          <li>
            <a href="#sobremi">SOBRE MI</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#linkedin">LinkedIn</a>
          </li>
          <button
            className="close-button d-lg-none"
            onClick={handleCloseClick}
            aria-label="Close navigation"
          >
            <FaTimes />
          </button>
        </animated.ul>
      </div>
    </nav>
  );
}

export default Nav;
