import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../CartWidget/CartWidget.css';


const CartWidget = ({carrito , toggleMenu}) => {
    return (
        <div>
            <FontAwesomeIcon icon={ faShoppingCart }/>
        </div>
    )
}

export default CartWidget
