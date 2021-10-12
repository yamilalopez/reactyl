import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

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
    <body> 
      <div>
        <NavBar 
        toggleMenu={toggleMenu}
        carrito={carrito}/>
      </div>
      <div className="bodyItem">
        <ItemListContainer addToCartWidget={addToCartWidget}/>
        <ItemDetailContainer id={1} />
      </div>
    </body>
  );
}

export default App;
