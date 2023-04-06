import React from "react";
import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// componentes
import NavBar from "./components/NavBar";

//Paginas
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Carrito from "./components/Carrito/Carrito";
import Productos from "./pages/Productos";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contactos" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
    </Router>
    );
  }
  
  
  export default App;