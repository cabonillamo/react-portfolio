import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTrail, animated } from "react-spring";
import "./Nav.css";

interface MenuItem {
  label: string;
  href: string;
}

const Nav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCloseButton, setShowCloseButton] = useState<boolean>(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowCloseButton(!showCloseButton);
  };

  const handleCloseClick = () => {
    setShowMenu(false);
    setShowCloseButton(false);
  };

  const menuItems: MenuItem[] = [
    { label: "INICIO", href: "#inicio" },
    { label: "SOBRE MI", href: "#sobremi" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "LinkedIn", href: "#linkedin" },
  ];

  const menuTrail = useTrail(menuItems.length, {
    from: {
      opacity: 0,
      transform: showMenu ? "translateX(-100%)" : "translateY(-100%)",
    },
    to: {
      opacity: showMenu ? 1 : 0,
      transform: showMenu ? "translateX(0%)" : "translateY(-100%)",
    },
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
        <ul className={`d-md-flex ${showMenu ? "show" : "hidden"}`}>
          {menuTrail.map((props, index) => (
            <animated.li key={index} style={props}>
              <a href={menuItems[index].href}>{menuItems[index].label}</a>
            </animated.li>
          ))}
          <button
            className="close-button d-lg-none"
            onClick={handleCloseClick}
            aria-label="Close navigation"
          >
            <FaTimes />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
