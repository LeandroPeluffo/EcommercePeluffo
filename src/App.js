import React from "react";
import "./App.css";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// componentes
import NavBar from "./components/NavBar";
import CardProducto from "./components/CardProducto/CardProducto";

//Paginas
import Inicio from "./pages/Inicio/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Carrito from "./pages/Carrito/Carrito";
import Productos from "./components/CardProductoDisplay/CardProductoDisplay";
import Categoria from "./pages/Categoria/Categoria"

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/categoria" element={<Categoria />} />
        </Routes>
      </div>
      <div>
        <CardProducto />
      </div>
    </Router>
    );
  }
  
  
  export default App;