import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Item = ({p})=>{
   return  (
    
   <Card style={{ width: '18rem' } }
         key ={p.id}
         className="mx-3 my-3 rounded"
   >
   <Card.Body>
    <Card.Img variant="top" src={p.imagen} />
     <Card.Title className='nombre_item'>{p.nombre}</Card.Title>
     <Card.Text className='precio_item'>
      Precio: ${p.precio}      
     </Card.Text>
     <Link to={`/item/${p.id}`}>
     <Button className='boton-detalles'>Detalles</Button>
     </Link>
   </Card.Body>
 </Card>)
}