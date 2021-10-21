import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import funda1 from '../../img/funda1.jpg';
import { useCartContext } from '../../context/CartContext';
import {AppContext} from '../../App'


const ItemDetail = ({ item }) => {

    const {state} = useContext(AppContext)
    const {cartList , agregarItem} = useCartContext()

    const onAdd=(cant) => {
        agregarItem ({item: item , cantidad: cant})
    }

    return (
        <article>   
        <div className="detail-info">
        <img src={funda1} className="img-detail" />
  
            <h2 className="nombre">{item.nombre}</h2>

           <p className="descripcion">{item.descripcion}</p>
                <ul className="info-grid">
                    <li>Precio:</li>
                    <li>${item.precio}</li>
                    <li>Medidas:</li>
                    <li>{item.medidas}</li>
                </ul>
            <ItemCount stock={item.stock} onAdd={onAdd}/> 
        </div>
        </article>
    )
}

export default ItemDetail
