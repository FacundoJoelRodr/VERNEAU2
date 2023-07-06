import React from 'react'
import carrito from '../assets/carrito.png'

const carritoStyel ={
  img:{
    width: "20px",
    height: "20px",
  },


}
const CartWidget = () => {
  return (
    <span className='spanCarrito'><img src={carrito} alt='carrito' style={carritoStyel.img} id='carrito'/>0</span>

  )
}

export default CartWidget