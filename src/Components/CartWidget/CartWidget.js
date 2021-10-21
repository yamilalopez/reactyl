import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../CartWidget/CartWidget.css';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <div>
            <Link to={`/Cart`}>
            <FontAwesomeIcon icon={ faShoppingCart }/>
            </Link>
        </div>
    )
}

export default CartWidget
