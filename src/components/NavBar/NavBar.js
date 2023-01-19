import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = ({escuela, todo, productouno, productodos, productotres}) => {
  return (
    <div className="navBar"> 
     <img alt="logotipo de nefredos" src="./images/logo.png" /><h2 className="nombreLogo">{escuela}</h2>
    <ul>
     <li className="lista">{todo}</li>
     <li className="lista">{productouno}</li>
     <li className="lista">{productodos}</li>
     <li className="lista">{productotres}</li>
    </ul>
    <div>
      <CartWidget />
    </div>
    </div>
  )
}

export default NavBar;