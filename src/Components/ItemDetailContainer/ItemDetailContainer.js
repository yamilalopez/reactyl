import React, { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getData.js';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router'
import { getFirestore } from "../../services/getFirebase"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([null]);

    let { id } = useParams();
    id = parseInt(id);

const db = getFirestore();

const getItem = async () => {
    try {
      const res = await db.collection("items").doc(id).get();
      getItem({ id: res.id, ...res.data() });
    } catch (error) {
      console.log(error);
    }
    getItem(true);
  };


    useEffect(() => {
        getProductById(id, setProduct);
      }, []);


    return (
        <div>
            <section>
                {product ? <ItemDetail 
                nombre={product.nombre}
                id={product.id}
                precio={product.precio}
                img={product.img}
                descripcion={product.descripcion}
                stock={product.stock}/> : 
                <p>Obteniendo producto...</p>}
            </section>   
        </div>
    )
}

export default ItemDetailContainer
