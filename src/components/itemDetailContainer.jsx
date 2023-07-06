
import React from 'react';
import {useState, useEffect} from "react" 
import productosJson from '../productos/productos.json';
import { ItemDetail} from './itemDetail';

const ItemListConteiner = (props) => {
  const [producto, setProducto] = useState([]);
  useEffect(()=>{
    const promise = new Promise((resolve, rejected)=>{
      setTimeout(()=>{
        resolve(productosJson);
      },500);
    });

    promise.then(result =>{ 
        setProducto(result[0])
    });
  }, []);

    return (
  <>
   <div className='container'>
  <h1 className='titulo_principal'>Detalle de Producto</h1>
  {producto === null ? <div className='cargando'>Cargando el producto</div> : <ItemDetail p= {producto}/>}
  </div>
  
    </>
    );
  }
export default ItemListConteiner
