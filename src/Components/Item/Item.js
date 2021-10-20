import ItemCount from '../ItemCount/ItemCount';
import '../Item/Item.css';
import { Link } from 'react-router-dom';

const Item = ({nombre , precio , img , medidas , stock , id}) => {
    return (
      <div class="container">
        <div class="row "> 
          <div class="col-sm-6">
            <div class="card">
              <img src={img} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{nombre}</h5>
                <p class="card-text">{medidas}</p>
                <p class="card-text">${precio}</p>
                <Link to={`/products/${id}`} >
                <button className="btn col-xs-6 botonVerMas"> Ver más </button>
                </Link> 
              </div>
              <ItemCount stock={stock} />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Item
