import ItemCount from "../ItemCount/ItemCount";


const Item = ({producto}) => {
  return (
        <li key={producto.id}>{producto.name}</li>
  );
};

export default Item;