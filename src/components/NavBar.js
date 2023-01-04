import "./CartWidget";
import "./NavBar.css";

const NavBar = ({escuela, curso, cursodos, cursotres}) => {
  return (
    <div className="navBar">
     <nav className="menu">
     <h2>{escuela}</h2>
     <li className="lista">{curso}</li>
     <li className="lista">{cursodos}</li>
     <li className="lista">{cursotres}</li>
     </nav>
    </div>
  )
}

export default NavBar;