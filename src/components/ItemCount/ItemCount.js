import "./Item.css"
import { useState } from "react";


const stock = 10;
const limite = 0;

const ItemCount = () => {
    const [contador, setContador] = useState(0);

    const sumar = () => {
        if (stock === contador) {
            return;
        }
        setContador(contador + 1)
    };

    const restar = () => {
        if (limite === contador) {
            return;
        }
        setContador(contador - 1)
    };


  return (
    <div className="counting">
    <div className="controles">
        <button onClick={restar}>-</button>
        <div>
            <span>{contador}</span>
        </div>
        <button onClick={sumar}>+</button>
    </div>
    <div>
        <button>Agregar al carrito</button>
    </div>
</div>
  )
}

export default ItemCount;