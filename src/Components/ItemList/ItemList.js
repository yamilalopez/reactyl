import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import { getAllProductsFromDB } from '../../helpers/getData.js';

const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProductsFromDB(setProducts);
      }, []);


    return (
        <>
            {products.length ? (
                <>
                <div className="container">
                <div className="row">
                    {
                        products.map((product) => (
                            
                            <div className="col-sm-12 col-md-6 col-lg-4"
                            key={product.id}>
                                <Item
                                id={product.id}
                                nombre={product.nombre}
                                stock={product.stock}
                                precio={product.precio}
                                img={product.img}
                                medidas={product.medidas}
                                />
                            </div>
                                
                            ))
                        }
                    </div>
                    </div> 
                </>
            ) : (
                <p>Cargando productos...</p>
            )}
        </>
    )
}

export default ItemList
