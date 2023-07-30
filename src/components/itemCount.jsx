import React from 'react';

const ItemCount = ({ initial, stock, className, cantidad, setCantidad }) => {
  const handleIncrement = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleDecrement = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className={className}>
      <button className='btn  boton-item' onClick={handleDecrement}>        -
      </button>
      <span className='contador-compra'>{cantidad}</span>
      <button className='btn boton-item' onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default ItemCount;