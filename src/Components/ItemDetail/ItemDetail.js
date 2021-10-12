import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import funda1 from '../../img/funda1.jpg';


const ItemDetail = ({ item }) => {
    return (
        <article>
            <img src={funda1} />
        <div>
           <h2>{item.nombre}</h2>
           <p>{item.descripcion}</p>
                <ul>
                    <li>Precio:</li>
                    <li>${item.precio}</li>
                    <li>Medidas:</li>
                    <li>{item.medidas}</li>
                </ul>
            <ItemCount stock={item.stock} /> 
        </div>
        </article>
    )
}

export default ItemDetail
