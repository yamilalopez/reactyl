import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import { productsList } from './data/data';
import { createContext } from 'react';

export const AppContext = createContext ()

function App() {
  const [state , setState] = useState(productsList)

function setearState (item) {
  setState (item)
}

  return (
    <CartContextProvider>
      <AppContext.Provider value={{state , setState , setearState}}>
        <Router> 
          
            <NavBar />

              <div className="bodyItem">

              <Switch>
                <Route exact path="/products">
                  <ItemListContainer />
                </Route>

                <Route exact path="/products/:id">
                  <ItemDetailContainer id={1} />
                </Route>

                <Route exact path="/" >
                    <Home />
                </Route>
              </Switch>
              
              </div>
            
        </Router>
      </AppContext.Provider>
    </CartContextProvider>
  );
  }

export default App;


  /* const [carrito,setCarrito] = useState(0);

  const [open,setOpen] = useState(true)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const addToCartWidget = (articles) => {
    setCarrito(carrito + articles)
} */