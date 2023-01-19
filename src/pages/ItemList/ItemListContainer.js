import "./ItemList.css";
import ItemCount from "../../components/ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h1 className="saludo">{greeting}</h1>
      <ItemCount />
    </div>
  )
}

export default ItemListContainer;