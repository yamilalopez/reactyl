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

      const [show, setShow]=useState(false);
      return (
        <div>
            <div className="controls">
                <button onClick={()=>remove()} className="btn botonCantidad">-</button>
                <span>Cantidad : {cantidad} </span>
                <button onClick={()=>add()} className="btn botonCantidad">+</button>
            </div>
            <div>
                <button onClick={()=>setShow(true)} className="btn botonAgregar">Agregar al Carrito</button>
            </div>
            <div className="stock">
                <p>Stock disponible: {stock}</p>
            </div>
            { show && <button onClick={() => alert("¡Gracias por su compra!")} className="btn botonAgregar mb-5"> Finalizar Compra </button>}
        </div>
      );
    };


export default ItemCount;
