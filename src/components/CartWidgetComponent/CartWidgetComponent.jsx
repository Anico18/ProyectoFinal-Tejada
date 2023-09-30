import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidgetComponent = () => {
const {cartItems} = useContext(CartContext);

    return (
        <div>
            <FaShoppingCart /> <Badge bg="danger">{cartItems}</Badge>
        </div>
    )
}

export default CartWidgetComponent;