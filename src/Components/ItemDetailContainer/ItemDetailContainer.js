import React, { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getData.js';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {

    const [product, setProduct] = useState([null]);

    useEffect(() => {
        getProductById(parseInt (id), setProduct);
        console.log(product);
      }, [id]);

    return (
        <div>
            <section>
                {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
            </section>   
        </div>
    )
}

export default ItemDetailContainer
