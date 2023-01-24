import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({productos}) => {
  return ( 
    <>
    <ul>{productos.map((producto) => (
        <Item producto={producto}/>
        ))}
    </ul>
    </>
  );
};

export default ItemList;