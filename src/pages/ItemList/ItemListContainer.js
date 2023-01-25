import "./ItemList.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";


const arreglo = [
  {name: "Blusa blanca", id: "producto1", descripcion:"Blusa blanca de poliester", price:"350.00 MX", image: <img alt="Blusa blanca de poliester" src="./images/camisa.blanca.jpg" width={300}/>},
  {name: "Blusa negra", id: "producto2",  descripcion:"Blusa negra de poliester", price:"350.00 MX", image: <img alt="Blusa negra de poliester" src="./images/blusa.negra.jpg" width={300} />},
  {name: "Camiseta negra", id: "producto3", descripcion:"Camiseta negra de poliester", price:"450.00 MX", image: <img alt="Camiseta negra de poliester" src="./images/camiseta.negra.jpg" width={300} />},
  {name: "Sueter negro", id: "producto4", descripcion:"Sueter negro de algodon", price:"750.00 MX", image: <img alt="Sueter negro de algodon" src="./images/sueter.manga.larga.jpg" width={300} />},
  {name: "Jeans color claro", id: "producto5", descripcion:"Jeans de mezclilla deslavados color claro", price:"850.00 MX", image: <img alt="Jeans de mezclilla deslavados color claro" src="./images/jeans.claros.jpg" width={300} />},
  {name: "Jeans", id: "producto6", descripcion:"Jeans con cinturon estilo vaquero", price:"950.00 MX", image: <img alt="Jeans con cinturon estilo vaquero" src="./images/jeans.jpg" width={300} />},
  {name: "Jeans blancos", id: "producto7", descripcion:"Jeans color blanco estilo vaquero", price:"850.00 MX", image: <img alt="Jeans color blanco estilo vaquero" src="./images/vaqueros.blancos.jfif" width={300} />},
  {name: "Jeans vaquero color claro", id: "producto8", descripcion:"Jeans color claro estilo vaquero", price:"850.00 MX", image: <img alt="Jeans color claro estilo vaquero" src="./images/vaqueros.jpg" width={300} />},
  {name: "Pulsera plata de corazones zafiro", id: "producto9", descripcion:"Pulsera plata con detalles de corazon de piedra zafiro", price:"550.00 MX", image: <img alt="Pulsera plata de corazones zafiro" src="./images/corazones.jfif" width={300} />},
  {name: "Pulsera de ciervo con zafiro incrustado", id: "producto10", descripcion:"Pulsera con cuernos de ciervo y piedra de zafiro incrustada", price:"350.00 MX", image: <img alt="Pulsera de ciervo con zafiro incrustado" src="./images/turqueza.jfif" width={300} />},  
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