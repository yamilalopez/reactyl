import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    <Navbar bg="dark">
    <Navbar.Brand>
        <img src={logo} className="App-logo" alt="logo" />
        Hawaii Deco
    </Navbar.Brand>

    <Nav>
    <Nav.Link href="inicio">Inicio</Nav.Link>
    <NavDropdown title="Productos">
    <NavDropdown.Item href="">Alfombras</NavDropdown.Item>
    <NavDropdown.Item href="">Espejos</NavDropdown.Item>
    <NavDropdown.Item href="">Velas aromáticas</NavDropdown.Item>
    <NavDropdown.Item href="">Floreros/Jarrones</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="misFavoritos">Mis favoritos</Nav.Link>
    <Nav.Link href="contactanos">Contactanos</Nav.Link>
    </Nav>
    </Navbar>
    </div>
  );
}

export default App;