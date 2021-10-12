import React, { useEffect, useState } from 'react'
import {Col , Container , Row} from 'react-bootstrap';
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
                    {
                        products.map((product) => 
                            {
                                return (
                                    <Container>
                                        <Row>
                                            <Col md="auto" lg="4">
                                                <div key={product.id}>
                                                    <Item
                                                    nombre={product.nombre}
                                                    stock={product.stock}
                                                    precio={product.precio}
                                                    img={product.img}
                                                    medidas={product.medidas}
                                                    />
                                                </div>
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
