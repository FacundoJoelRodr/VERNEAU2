import React from 'react';
import {useState, useEffect} from "react" 
import { ItemList } from './itemList';
import CardGroup from 'react-bootstrap/CardGroup';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListConteiner = (props) => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const db = getFirestore();
        const collectionRef = collection(db, 'ItemCollection');
        let q;

        if (id) {
          // Si hay una categoría seleccionada (id no es undefined), filtramos por categoría
          q = query(collectionRef, where('tipo', '==', id));
        } else {
          // Si no hay categoría seleccionada (id es undefined), obtenemos todos los productos
          q = query(collectionRef);
        }

        const snapshot = await getDocs(q);
        const productosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productosData);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
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
