import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './pages/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar escuela="NEFREDOS" todo="Todos" productouno="Jeans" productodos="Camisas" productotres="Joyeria"/>
      <header className="App-header">
      <ItemListContainer greeting="Bienvenido a NEFREDOS"/>
      </header>
    </div>
  );
}

export default App;
