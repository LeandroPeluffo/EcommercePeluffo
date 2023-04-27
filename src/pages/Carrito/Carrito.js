import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Carrito = () => {
  return (
    <div>
      <ShoppingCartIcon className='logoCarrito' sx={{ color: "white" }}/>
      <span style={{ color: "white" }}>1</span>
    </div>
  )
}

export default Carrito