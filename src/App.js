import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from './components/cart';
import { CartProvider } from './components/cartContext';
import Checkout from './components/checkout';

function App() {

  return (
    <>
    <CartProvider >
      <BrowserRouter>      
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer bienvenida="TIENDA PRINCIPAL" />} />
          <Route path="/category/:id" element={<ItemListContainer bienvenida="TIENDA" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart  />} />
          <Route path="/checkout" element={<Checkout  />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;