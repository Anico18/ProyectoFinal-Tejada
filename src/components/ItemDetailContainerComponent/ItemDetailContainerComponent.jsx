import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import ItemCount from '../ItemCountComponent/ItemCountComponent';

const ItemDetailContainerComponent = () => {
const { itemId } = useParams();
// const productFiltered = ProductsData.filter((item) => item.id === parseInt(itemId));

// Correct syntax for initializing state
const [product, setProduct] = useState([]);

useEffect(() => {
  const db = getFirestore();
  const item = doc(db, 'products', itemId);

  getDoc(item)
    .then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
}, [itemId]); // Empty dependency array for one-time fetch



return (
    <div>
        <Card
        style={{ width: '18rem', height: '18rem', margin: '1rem' }} key={product.id}>
        <Card.Img variant="top" src={product.pictureUrl}/>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <ListGroup>
                <ListGroup.Item>Precio: USD {product.price}</ListGroup.Item>
                <ListGroup.Item>Stock: {product.stock}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
        <Card.Body>
            <ItemCount />
            {product.stock >=5 ? (
                <strong>¡Stock disponible!</strong>
            ) : (
                <strong>¡Últimas disponibles!</strong>
            )}
            <Button>Agregar</Button>
        </Card.Body>
        </Card>
    </div>
);
};

export default ItemDetailContainerComponent;

