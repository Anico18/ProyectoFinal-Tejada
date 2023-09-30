import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Category = () => {

    const navigate = useNavigate();
    const {categoryId} = useParams();

// Correct syntax for initializing state
const [products, setProducts] = useState([]);

useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');

    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array for one-time fetch

  const filter = products.filter((item) => item.categories === categoryId)

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {filter.map(item => {
                return(
                    // <div key={item.id}>
                    //     <label>{item.description}</label>
                    // </div>
                    <Card style={{ width: '18rem', height: '18rem', margin: '1rem', }} key={ item.id }>
                        <Card.Img style={{ maxWidth: '150px', minWidth: "100px", alignSelf: "center", maxHeight: "150px", minHeight: "100px" }} variant="top" src={item.pictureUrl} />
                        <Card.Body>
                            <Card.Title>{ item.name }</Card.Title>
                            <Card.Text>{ item.description }</Card.Text>
                            <Button variant="outline-primary" onClick={() => navigate(`/item/${item.id}`)}>Detalles del producto</Button>{' '}
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default Category