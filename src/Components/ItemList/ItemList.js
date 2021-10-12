import React, { useEffect, useState } from 'react'
import { productsList } from '../../data/data.js'
import {Col , Container , Row} from 'react-bootstrap';
import Item from '../Item/Item';

const ItemList = () => {

    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productsList);
        }, 2000);
      });

      const getProductsFromDB = async () => {
        try {
          const result = await getProducts;
          setProducts(result);
        } catch (error) {
          alert('No podemos mostrar los productos en este momento');
        }
      };

      useEffect(() => {
        getProductsFromDB();
      }, []);

    return (
        <>
            {products.length ? (
                <>
                    {
                        products.map((product) => 
                            {
                                return (
                                    <Container>
                                        <Row>
                                        <Col lg="4">
                                            <Item
                                                key={product.id} 
                                                nombre={product.nombre}
                                                stock={product.stock}
                                                precio={product.precio}
                                                img={product.img}
                                                medidas={product.medidas}
                                            />
                                        </Col>
                                        </Row>
                                    </Container>
                                )
                            }
                        ) 
                    }
                </>
            ) : (
                <p>Cargando productos...</p>
            )}
        </>
    )
}

export default ItemList
