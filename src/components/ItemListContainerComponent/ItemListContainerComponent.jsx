import Button from "react-bootstrap/esm/Button";
import './ItemListContainerComponent.css'
import Card from "react-bootstrap/Card"
import {  useNavigate } from 'react-router-dom';

const ItemListContainerComponent = ({productsData}) => {

    const navigate = useNavigate();

        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {
                    productsData.map((item) => {
                        return (
                            <Card style={{ width: '18rem', height: '18rem', margin: '1rem'}} key={ item.id }>
                                <Card.Img style={{ maxWidth: '150px', minWidth: "100px", alignSelf: "center", maxHeight: "150px", minHeight: "100px" }} variant="top" src={item.pictureUrl} />
                                <Card.Body>
                                <Card.Title>{ item.name }</Card.Title>
                                <Card.Text>{ item.description }</Card.Text>
                                <Button variant="outline-primary" onClick={() => navigate(`/item/${item.id}`)}>Detalles del producto</Button>{' '}
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                
            </div>
        )
}

export default ItemListContainerComponent;