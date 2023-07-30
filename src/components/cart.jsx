import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from './cartContext';
import {Link} from 'react-router-dom'

const Cart = () => {

  const { carrito, calcularTotal, eliminarDelCarrito, handleCancelar} = useContext(CartContext);

  // Verificación de si el carrito está vacío o es undefined
  if (!carrito || carrito.length === 0) {
    return <div>Tu carrito está vacío.</div>;
  }

  return (
    <div>
      <h1>Tu Carrito de Compras</h1>
      <div className="carrito-container">
        {carrito.map((item) => (
          <Card key={item.id} className="detalle_productos shadow-lg">
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.nombre}</Card.Title>
              <Card.Text>Precio: ${item.precio}</Card.Text>
              <Card.Text>Cantidad: {item.cantidad}</Card.Text>
              <Card.Text>Subtotal: ${item.precio * item.cantidad}</Card.Text>
              <Button className='boton-cancelar2' onClick={() => eliminarDelCarrito(item.id)}>Borrar</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="total-container">
        <h2>Total de la Compra:</h2>
        <h2>${calcularTotal()}</h2>
        <Link to="/checkout">
       <Button className='boton-compra'>Comprar</Button>
        </Link>
        <Link to="/">
        <Button className='boton-cancelar'>Volver</Button>
        </Link>
        <Link to="/">
        <Button className='boton-cancelar'onClick={handleCancelar} >Cancelar</Button>
        </Link>    
      </div>
    </div>
  );
};
  
  export default Cart;
  
  