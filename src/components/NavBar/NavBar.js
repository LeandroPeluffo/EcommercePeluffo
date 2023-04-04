import React from 'react'
import "./NavBar.css"
import Logo from "./Logo.png"
import { Link } from 'react-router-dom';

import Carrito from '../Carrito/Carrito';


const NavBar = () => {
  return (
    <nav className="NavigationBar">
  <ul className="List-ul">
    <Link className='link' to="/"><img className='logo' src={Logo} alt="logo"></img></Link>
    <Link className='link' to="/">Home</Link>
    <Link className='link' to="/Productos">Productos</Link>
    <Link className='link' to="/Contacto">Contacto</Link>
    <Link className='link' to="/Carrito"><Carrito /></Link>
  </ul>
</nav>
  );
};

export default NavBar;