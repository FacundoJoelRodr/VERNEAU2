
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export const ItemDetail = ({p})=>{
   return  (
    <Card style={{ width: '18rem' }}
    key ={p.id}
    className='detalle_prod shadow-lg'
>
<Card.Body>
<Card.Img variant="top" src={p.imagen} />
     <Card.Title className='nombre_item'>{p.nombre}</Card.Title>
     <Card.Text className='precio_item'>
     Precio: ${p.precio}      
</Card.Text>
<Button className='boton-detalles'>Comprar</Button>
</Card.Body>
</Card>
    )
}