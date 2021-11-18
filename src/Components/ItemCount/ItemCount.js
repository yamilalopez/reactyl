import React, { useState } from 'react';
import '../Item/Item.css';
import { Link } from 'react-router-dom';


const ItemCount = ({stock, onAdd}) => {
  let initial = 0
  if (stock>0) {initial = 1};

  const [qAdd, setqAdd] = useState(initial);

  const remove = () => {
    if (qAdd > 1) {
      setqAdd(qAdd-1)
    }
  };

  const add = () => {
    if (qAdd < stock) {
      setqAdd(qAdd+1)
    }
  }

  const [show, setShow]=useState(false);

      return (
        <>
          <div>
          <div className="controls">
            <button onClick={() => remove()} disabled={qAdd === 1 || qAdd === 0 ? true : null} className="botonCantidad">-</button>
            <span>Cantidad: {qAdd} </span>
            <button onClick={() => add()} disabled= {qAdd===stock?true:null} className="botonCantidad"> + </button>
          </div>
          <div>
            <button onClick={() =>{ setShow(true); onAdd(qAdd)}} className="botonAgregar">Agregar al Carrito</button>
        </div>
        <div className="stock">
            <p>Stock disponible: {stock}</p>
          </div>
            { show && <Link to="/Cart"><button className="botonAgregar mb-5">Finalizar Compra</button></Link>}
        </div>
        </>
      );
    };


export default ItemCount;
