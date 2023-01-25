import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"


const Item = ({producto}) => {
  return (
    <ul className="columna">
        <li className="imagen">
        {producto.image } 
        </li>
        <li className="producto" key={producto.id}>{producto.name}
        </li>
        <li className="descripcion">
        {producto.descripcion}
        </li>
        <li className="precio">
        {producto.price}
        </li>
    </ul>
  );
};

export default Item;