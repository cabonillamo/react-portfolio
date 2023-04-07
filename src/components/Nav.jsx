import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      id="nav"
      className="bg-gray-900 text-white px-4 py-2 flex justify-center"
    >
      <div className="flex items-center justify-between w-full max-w-screen-lg">
        <a href="#inicio" className="hover:text-gray-400">
          INICIO
        </a>
        <button
          className="md:hidden"
          onClick={handleMenuClick}
          aria-label="Toggle navigation"
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          id="links"
          className={`${
            showMenu ? "flex-col" : "hidden"
          } md:flex md:flex-row md:justify-center md:gap-4 mt-4 md:mt-0 flex-col items-center`}
        >
          <li>
            <a href="#sobremi" className="hover:text-gray-400">
              SOBRE MI
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-gray-400">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#linkedin" className="hover:text-gray-400">
              <div className="flex items-center">
                <FaLinkedin className="mr-2" />
                <span>LinkedIn</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
