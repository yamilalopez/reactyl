import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    <Navbar bg="dark">
        <img src={logo} className="App-logo" alt="logo" />
    </Navbar>
    </div>
  );
}

export default App;
