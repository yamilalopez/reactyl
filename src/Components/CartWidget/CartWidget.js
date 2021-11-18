import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

    const {qBuy} = useCartContext();

    return (
        <>
            <Link to='/Cart'>
                <div>
                    <FontAwesomeIcon icon={ faShoppingCart } />
                    {qBuy}
                </div>
            </Link>
        </>
    )
}

export default CartWidget
