import React, { useState } from 'react';
import '../Item/Item.css';

const Item = ({nombre , stock , precio , img , medidas , addToCartWidget}) => {

    const [cantidad , setCantidad] = useState(1)

    function add() {
        if(cantidad <  stock) setCantidad(cantidad + 1)
      }

    function remove() {
        if( cantidad > 1) setCantidad(cantidad - 1)
      }

    return (
        <div class="row "> 
        <div class="col-sm-6">
          <div class="card">
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{nombre}</h5>
              <p class="card-text">{medidas}</p>
              <p class="card-text">${precio}</p>
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
      </div>
    </div>
  </div>
        </div>
    )
}

export default Item
