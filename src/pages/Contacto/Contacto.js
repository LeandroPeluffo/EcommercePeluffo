import React from 'react';
import "../Contacto/Contacto.css"

const Contact = () => {
	return (
		<div className='containerContact' >
			<h1>CONTACTO</h1>
      <div>
			  <p>SOMOS UNA EMPRESA SITUADA EN EL CORAZÓN DE MONTEVIDEO</p>
        <p>ESTAMOS UBICADOS EN AVENIDA ITALIA 1234</p>
        <img src="/FotoMapa.jpg" alt="Imagen Mapa"/>
        <p>Horario: Lunes a viernes de 9 a 18hs | Sábado de 9 a 14hs </p>
        <p>Numeros: 091234567 | 23041234</p>
      </div>
		</div>
	);
};

export default Contact;