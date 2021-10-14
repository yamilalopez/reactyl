import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import funda1 from '../../img/funda1.jpg';
import { Link } from 'react-router-dom';


const ItemDetail = ({ item , id }) => {
    return (
        <article>   
        <div className="detail-info">
        <img src={funda1} className="img-detail" />

            <Link to={`/productos/${id}`}>
            <h2 className="nombre">{item.nombre}</h2>
            </Link>

           <p className="descripcion">{item.descripcion}</p>
                <ul className="info-grid">
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
