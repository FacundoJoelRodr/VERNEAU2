import React from 'react'
import carrito from '../assets/carrito.png'
import { CartContext } from './cartContext';
import { useContext } from 'react';


const CartWidget = () => {
  const {cantidadEnCarrito} = useContext(CartContext)
  return (
    <span className='spanCarrito'>
      <img src={carrito} alt='carrito' id='carrito' />
      {cantidadEnCarrito()}
    </span>
  );
};

export default CartWidget