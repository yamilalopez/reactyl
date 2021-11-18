import ItemCount from '../ItemCount/ItemCount';
import '../Item/Item.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react'; 



const Item = ({nombre , precio , img , medidas , stock , id}) => {
  
  const cartContext = useContext(CartContext)
  const {addItem} = cartContext;
  const onAdd = (qty) => {
    addItem({nombre , precio , img , id}, qty)
  }



    return (
      <div class="container">
        <div class="row "> 
          <div class="col-sm-6">
            <div class="card">
              <img src={img} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{nombre}</h5>
                <p class="card-text">{medidas} | ${precio}</p>
                <Link to={`/detail/${id}`} >
                <button className="col-xs-6 botonVerMas"> Ver más </button>
                </Link> 
              </div>
              <ItemCount stock={stock} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Item
