import React, { useContext, useState }from 'react';
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import { CartContext } from './cartContext';
import {collection, addDoc, getFirestore} from 'firebase/firestore';

const Checkout = () => {
  const [orderId, setOrderId] = useState("")
  const { carrito, calcularTotal, handleCancelar} = useContext(CartContext);
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    const db = getFirestore();
    const onSubmit = (data) => {
      const buyer ={
        cliente:data,
        productos: carrito,
        total:calcularTotal()
      }
      const orderRef = collection(db,"orders");
      addDoc(orderRef, buyer)
      .then((doc)=>{
        setOrderId(doc.id)  
        handleCancelar()
      })
     };

     if(orderId){
      return(
        <div className='container orden'>
          <h1>Muchas gracias por tu compra!</h1>
          <p>Su numero de Orden es: {orderId}</p>
          <p>Lo estamos esperando de vuelta</p>
          <Link to="/">
          <button className='form-button-orden'>
            Volver Home 
          </button>
          </Link>
        </div>
      )     
      
     }
  
    return (
      <div className="form-container">
        <h2 className='finalizar'> Finalizar Compra</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              Nombre: 
            </label>
            <input
              type="text"
              id="nombre"
              {...register('nombre', { required: 'Este campo es requerido' })}
              className="form-input"
            />
            {errors.nombre && <span className="form-error">{errors.nombre.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="apellido" className="form-label">
              Apellido:
            </label>
            <input
              type="text"
              id="apellido"
              {...register('apellido', { required: 'Este campo es requerido' })}
              className="form-input"
            />
            {errors.apellido && <span className="form-error">{errors.apellido.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="mail" className="form-label">
              Mail:
            </label>
            <input
              type="email"
              id="mail"
              {...register('mail', { required: 'Este campo es requerido' })}
              className="form-input"
            />
            {errors.mail && <span className="form-error">{errors.mail.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="telefono" className="form-label">
              Teléfono:
            </label>
            <input
              type="number"
              id="telefono"
              {...register('telefono', { required: 'Este campo es requerido' })}
              className="form-input"
            />
            {errors.telefono && <span className="form-error">{errors.telefono.message}</span>}
          </div>
          <button type="submit" className="form-button">
            Enviar
          </button>
          <Link to="/">
          <button className='form-button-red' onClick={handleCancelar}>
            Cancelar 
          </button>
          </Link>
        </form>
      </div>
    );
  };
  
  export default Checkout;