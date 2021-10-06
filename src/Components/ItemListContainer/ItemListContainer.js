import React from 'react';
import Item from '../Item/Item';
import funda1 from '../img/funda1.jpg';
import funda2 from '../img/funda2.jpg';
import funda3 from '../img/funda3.jpg';
import funda4 from '../img/funda4.jpg';
import funda5 from '../img/funda5.jpg';
import funda6 from '../img/funda6.jpg';
import {Col , Container , Row} from 'react-bootstrap';


const ItemListContainer = ( {addToCartWidget} ) => {

  const items = [
    {id:1 , nombre:"Funda Primitivo" , stock:7 , precio: 600 , img: funda1 , medidas: "40x40"},
    {id:2 , nombre:"Funda Maldivas" , stock:8 , precio: 600 , img: funda2 , medidas: "40x40"},
    {id:3 , nombre:"Funda Paris" , stock:7 , precio: 600 , img: funda3 , medidas: "40x40"},
    {id:4 , nombre:"Funda Calamity" , stock:6 , precio: 600 , img: funda4 , medidas: "40x40"},
    {id:5 , nombre:"Funda Lashes" , stock:9 , precio: 699 , img: funda5 , medidas: "50x30"},
    {id:6 , nombre:"Funda Porter" , stock:4 , precio: 850 , img: funda6 , medidas: "45x45"},

  ]

    return (
        <Container>
          <Row>
          {items.map((item =>
          <Col lg="4">
          <Item
            key={item.id} 
                nombre={item.nombre}
                stock={item.stock}
                precio={item.precio}
                img={item.img}
                medidas={item.medidas}
                addToCartWidget={addToCartWidget}
            />
            </Col>
          ))}
        </Row>
        </Container>
    );
};

export default ItemListContainer
