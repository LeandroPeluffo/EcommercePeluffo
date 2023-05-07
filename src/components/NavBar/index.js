import React from 'react';

import "./styles.css"

import { Link } from 'react-router-dom';
import Logo from "./Logo.png"
import Carrito from '../../pages/Carrito/Carrito';
import menuCategoria from "../MenuCategoria/menuCategoria"


const NavBar = () => {
  return (
    <nav className="NavigationBar">
      <ul className="List-ul">
        <Link className='link' to="/"><img className='logo' src={Logo} alt="logo"></img></Link>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/Productos">Productos</Link>
        <Link className='link' to="/Categoria">Categoria</Link>
        <Link className='link' to="/Contacto">Contacto</Link>
        <Link className='link' to="/Carrito"><Carrito /></Link>
      </ul>
    </nav>
  );
};


export default NavBar;