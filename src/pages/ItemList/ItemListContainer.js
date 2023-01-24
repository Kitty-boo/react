import "./ItemList.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";


const arreglo = [
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
  {name: "producto1", id: "producto1"},
];

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(arreglo);
    }, 2000);
  });

    useEffect(() => {
      getProducts
      .then((response) => {
          setProducts(response);
      })
      .catch(error => console.log(error))
  }, []);


  return (
      <div>
          {greeting}
          <ItemList productos={products} />
      </div>
  );
};

export default ItemListContainer;