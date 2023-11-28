import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
