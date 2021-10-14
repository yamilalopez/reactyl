import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {

  /* const [carrito,setCarrito] = useState(0);

  const [open,setOpen] = useState(true)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const addToCartWidget = (articles) => {
    setCarrito(carrito + articles)
} */


  return (
  
      <Router> 
        
          <NavBar />
          
        
          
            <div className="bodyItem">
            <Switch>
            <Route exact path="/category">
              <ItemListContainer />
            </Route>

            <Route exact path="/category/:id">
              <ItemDetailContainer id={1} />
            </Route>

            <Route exact path="/" >
                <Home />
            </Route>

            </Switch>
            </div>
          
      </Router>

  );
}

export default App;
