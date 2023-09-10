import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {

  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1>
          <Link to="/">Torres De Buenos Aires</Link>
        </h1>

        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink to="/category/chandeliers" className= "nav-link">Arañas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/sconces" className= "nav-link">Apliques</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/lamps" className= "nav-link">Lamparas</NavLink>
          </li>
        </ul>
      
      
        <CartWidget/>
      
      </div>
    </nav>
  );
};

export default NavBar;