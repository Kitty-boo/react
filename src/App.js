import './App.css';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar escuela="NEFREDOS" curso="Ilustración" cursodos="Animación" cursotres="Ilustración"/>
      <header className="App-header">
      <ItemListContainer greeting="Bienvenido a NEFREDOS"/>
      <CartWidget />
      </header>
    </div>
  );
}

export default App;
