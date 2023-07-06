import React from 'react';
import {useState, useEffect} from "react" 
import { useParams } from 'react-router-dom';
import productosJson from '../productos/productos.json';
import { ItemList } from './itemList';
import CardGroup from 'react-bootstrap/CardGroup';

const ItemListConteiner = (props) => {
  const [productos, setProductos] = useState([]);
  const {id} = useParams()
 
  useEffect(()=>{
    const promise = new Promise((resolve, rejected)=>{
      setTimeout(()=>{
        resolve(productosJson);
      },500);
    });
    promise.then(result =>{ 
      if(id){
        setProductos(result.filter(p => p.tipo === id))
      }else{
        setProductos(result)
      }
    });
  }, [id]);

    return (
  <>

  <div className='container'>
  <h1 className='titulo_principal'>{props.bienvenida}</h1>

  <CardGroup>
  <div className="d-flex flex-wrap">
  {productos.length === 0 ? <div>Cargando los productos</div> : <ItemList productos= {productos}/>}
  </div>
  </CardGroup>
  </div>
 
  
    </>
    );
  }
export default ItemListConteiner
