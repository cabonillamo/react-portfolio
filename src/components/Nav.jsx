import React from 'react';

function Nav() {
  return (
    <nav id="nav" class="">
      <ul id="links">
        <li>
          <a href="#inicio" class="seleccionado" onclick="seleccionar(this)">
            INICIO
          </a>
        </li>
        <li>
          <a href="#sobremi" onclick="seleccionar(this)">
            SOBRE MI
          </a>
        </li>
        <li>
          <a href="#portfolio" onclick="seleccionar(this)">
            PORTFOLIO
          </a>
        </li>
      </ul>
    </nav>
  );
}


export default Nav;
