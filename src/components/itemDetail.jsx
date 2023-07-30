import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './itemCount';
import {Link} from 'react-router-dom';


const ItemDetail = ({ producto, addToCarrito }) => {
  const [cantidadCompra, setCantidadCompra] = useState(1);


  const handleCompra = () => {
    addToCarrito(producto, cantidadCompra);
  };

  return (
    <Card style={{ width: '18rem' }} className='detalle_prod shadow-lg'>
      <Card.Body>
        <Card.Img variant='top' src={producto.image} />
        <Card.Title className='nombre_item'>{producto.nombre}</Card.Title>
        <Card.Text className='precio_item'>Precio: ${producto.precio}</Card.Text>
        <Card.Text className='precio_item'>Cantidad Stock: {producto.stock}</Card.Text>
        <ItemCount
          initial={1}
          stock={producto.stock}
          className='boton-detalles'
          cantidad={cantidadCompra}
          setCantidad={setCantidadCompra}
        />
        <Button className='boton-detalles'><Link to="/cart" className='link-card' onClick={handleCompra}>
          Agregar al carrito
        </Link>
        </Button>
        <Link to="/">
        <Button className='boton-volver'>Volver</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;