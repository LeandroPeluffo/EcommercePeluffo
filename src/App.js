import React, { Component } from "react";
import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// componentes
import NavBar from "./components/NavBar/NavBar";
import Greeting from "./components/Greeting/Greeting";

//Paginas
import Inicio from "./pages/Inicio/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Carrito from "./components/Carrito/Carrito";
import Productos from "./pages/Productos/Productos";

const App = () => {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Greeting />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contactos" element={<Contacto />} />
            <Route path="/pruductos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </div>
      </Router>
    );
  }


export default App;