import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import CardProducto from '../../components/CardProducto';

const Productos = ({ data }) => {
  const [products, setProducts]= useState([]);

  useEffect(() => {
    axios("https://my-json-server.typicode.com/LeandroPeluffo/ApiProductos/db").then((res) => 
    setProducts(res.data["Catálogo"]));
  }, []);

  return (
    <div className="CardSection">
      {
        products.length>0 ? (
          products.map((product, index)=> {
            return(
              <div key={index}>
                <CardProducto data={product}/>
              </div>
            )
          })
        ):<div>Cargando Productos...</div>
      }
    </div>
  )
}

export default Productos