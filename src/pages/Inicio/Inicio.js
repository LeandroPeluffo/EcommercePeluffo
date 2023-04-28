import React from 'react';
import Greeting from "../../components/Greeting/Greeting"
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import "./Inicio.css"


const Inicio = () => {
    return (
    <>
      <div className='GreetingDiv'><Greeting /></div>
      <ItemListContainer />
    </>
  )
}

export default Inicio