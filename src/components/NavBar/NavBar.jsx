import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CarrtWidget";

const Navbar = () => {

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <nav>
        <h1>
          <Link to="/">Torres De Buenos Aires</Link>
        </h1>

        <ul>
          <li>
            <NavLink to="/category/chandeliers">Arañas</NavLink>
          </li>
          <li>
            <NavLink to="/category/sconces">Apliques</NavLink>
          </li>
          <li>
            <NavLink to="/category/lamps">Lamparas</NavLink>
          </li>
        </ul>
      </nav>

      <div>CartWidget</div>
    </div>
  );
};

export default Navbar;