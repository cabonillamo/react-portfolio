import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Nav() {
  return (
    <nav id="nav" className="bg-gray-900 text-white px-4 py-2">
      <ul id="links" className="flex justify-center gap-4">
        <li>
          <a href="#inicio" className="hover:text-gray-400">
            INICIO
          </a>
        </li>
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
    </nav>
  );
}

export default Nav;
