import React, { useState, useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom'; 
import ItemDetail from './itemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { CartContext } from './cartContext';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { agregarAlCarrito } = useContext(CartContext);
  const { id } = useParams();


  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const db = getFirestore();
        const refDoc = doc(db, 'ItemCollection', id);
        const snapshot = await getDoc(refDoc);

        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error('No se encontró el producto con el ID especificado.');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) {
    return <div>Cargando el producto...</div>;
  }

  return <ItemDetail producto={producto} addToCarrito={agregarAlCarrito} /> ;
};

export default ItemDetailContainer;