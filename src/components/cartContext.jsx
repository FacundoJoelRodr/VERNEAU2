import { useEffect, useState } from "react";
import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (producto, cantidad) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  const handleCancelar = () => {
    setCarrito([]);
  };

  useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
  },[carrito])

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        cantidadEnCarrito,
        eliminarDelCarrito,
        calcularTotal,
        agregarAlCarrito,
        handleCancelar
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
