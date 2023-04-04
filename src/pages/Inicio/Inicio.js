import React, { useEffect } from 'react'
import CardProductos from '../Productos/Productos'
import axios from 'axios';
import { useState } from 'react';

const Inicio = () => {
  const [data, setData]= useState({});

  useEffect(() => {
    
    axios.get("https://my-json-server.typicode.com/LeandroPeluffo/ApiProductos/db")
    .then((res) => console.log(res.data));

  }, []);

    return (
    <div className="CardSection">
            <CardProductos
            img={data.img}
            />
    </div>
  )
}

export default Inicio