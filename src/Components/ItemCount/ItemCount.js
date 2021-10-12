import React, { useState } from 'react';
import '../Item/Item.css';


const ItemCount = ({ remove , add , stock , addToCartWidget}) => {
const [cantidad , setCantidad] = useState(1)

    function add() {
        if(cantidad <  stock) setCantidad(cantidad + 1)
      }

    function remove() {
        if( cantidad > 1) setCantidad(cantidad - 1)
      };

      return (
        <>
          <div className="controls">
              <button onClick={()=>remove()} className="btn botonCantidad">-</button>
              <span>Cantidad : {cantidad} </span>
              <button onClick={()=>add()} className="btn botonCantidad">+</button>
          </div>
          <div>
              <button onClick={()=>addToCartWidget(cantidad)} className="btn  botonAgregar">Agregar al Carrito</button>
          </div>
          <div className="stock">
            <p>Stock disponible: {stock}</p>
          </div>
        </>
      );
    };

export default ItemCount;
