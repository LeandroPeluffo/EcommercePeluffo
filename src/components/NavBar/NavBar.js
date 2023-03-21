import React from 'react'
import "./NavBar.css"

import Carrito from '../Carrito/Carrito';

const NavBar = () => {
  return (
    <nav className="NavigationBar">
  <ul className="List-ul">
    <li>
      <img className='logo' src="https://latiendaweb.com.uy/wp-content/uploads/2022/09/ICONO-LTW.png"></img>
    </li>
    <li>
      <a href="">Inicio</a>
    </li>
    <li>
      <a href="">Productos</a>
    </li>
    <li>
      <a href="">contacto</a>
    </li>
    <li>
      <Carrito /> 
    </li>
  </ul>
</nav>
  );
};

export default NavBar;