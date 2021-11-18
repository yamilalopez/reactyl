import React, { useState } from "react";
import { useContext } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({nombre , precio , img , id , descripcion , stock }) => {
  const cartContext = useContext(CartContext);
  const { addItem } = cartContext;
 
  const onAdd = (qty) => {
    addItem({nombre , precio , img , id}, qty)
  }

  const [show, setShow] = useState(false);

  const [hide, setHide] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <div className="card mt-5 mb-5 col-md-6">
          <img src={img} className="card-img-top" alt="..." />

          <h2>{nombre}</h2>

          <ul className="info-grid">
            
            <li>Precio ${precio}</li>
          </ul>

          <p className="descripcion">{descripcion}</p>
          {hide ? (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          ) : null}

          {show ? (
            <Link to={"/cart"}>
              <button className="btn btn-dark botonAgregar btn__detail mb-1">
                Finalizar Compra
              </button>
            </Link>
          ) : null}
          {show ? (
            <Link to={"/products"}>
              <button className="btn btn-dark botonAgregar btn__detail mb-5">
                Seguir Comprando
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;