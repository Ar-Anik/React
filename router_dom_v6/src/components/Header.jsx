import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/hello"
            className={(cls) => (cls.isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className={(cls) => (cls.isActive ? classes.active : "")}
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
