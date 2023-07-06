import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer bienvenida="TIENDA PRINCIPAL"/>}/>
        <Route path="/category/:id" element={<ItemListContainer bienvenida="TIENDA"/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;