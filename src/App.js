import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <> 
      <NavBar />
      <ItemListContainer ListaProductos="Sus productos aquí"/>
    </>
  );
}

export default App;
