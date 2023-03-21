import React, { Component } from "react";
import "./App.css"

// components
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Greeting from "./components/Greeting/Greeting";
import CardProductos from "./components/Productos/Productos";



class App extends Component {
  render () {
    return (
      <div className="App">
        <NavBar />
        <Greeting />
        <div className="CardSection">
          <CardProductos
            nombre="Buzo 1"
            descripción="buzo deportivo abrigado"
            precio="1000"
            img="https://f.fcdn.app/imgs/439ae5/www.hering.com.uy/her/7e15/original/catalogo/EB42-ADNEN-1/460x605/buzo-deportivo-adulto-unissex-con-felpa-azul.jpg"
          />
          <CardProductos
            nombre="Buzo 2"
            descripción="buzo deportivo abrigado"
            precio="1500"
            img="https://f.fcdn.app/imgs/439ae5/www.hering.com.uy/her/7e15/original/catalogo/EB42-ADNEN-1/460x605/buzo-deportivo-adulto-unissex-con-felpa-azul.jpg"
          />
          <CardProductos
            nombre="Buzo 3"
            descripción="buzo deportivo abrigado"
            precio="2000"
            img="https://f.fcdn.app/imgs/439ae5/www.hering.com.uy/her/7e15/original/catalogo/EB42-ADNEN-1/460x605/buzo-deportivo-adulto-unissex-con-felpa-azul.jpg"
          />
        </div>

      </div>
    );
  }
}

export default App;