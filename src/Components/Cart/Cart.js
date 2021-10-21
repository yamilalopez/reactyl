import React from 'react'
import { useCartContext } from '../../context/CartContext'

const Cart = () => {
    const {cartList , vaciarCart} = useCartContext ()
    return (
        <div>
            {cartList.map(item => <h4 key={item.item.id}>{item.item.nombre}</h4>)}
            <button onClick={()=>vaciarCart()}>Eliminar producto</button>
        </div>
    )
}

export default Cart
