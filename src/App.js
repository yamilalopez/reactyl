import React, { useState,useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

  const [carrito,setCarrito] = useState(0);

  const [open,setOpen] = useState(true)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const addToCartWidget = (articles) => {
    setCarrito(carrito + articles)
}


  return (
    <> 
      <NavBar 
      toggleMenu={toggleMenu}
      carrito={carrito}/>
      <ItemListContainer addToCartWidget={addToCartWidget}/>
    </>
  );
}

export default App;
