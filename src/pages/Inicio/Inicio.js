import React from 'react';
import Greeting from "../../components/Greeting/Greeting"
import "./Inicio.css"


const Inicio = () => {
    return (
    <>
      <div className='GreetingDiv'><Greeting /></div>
      <div className='Banners'>
      <img src="/rtx-40-promo.jpg" alt="Imagen Gforce"/>
      <img src="/samsung-990-pro-1920.jpg" alt="Imagen Samsung"/>
      </div>
    </>
  )
}

export default Inicio