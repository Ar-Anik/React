import { NavLink } from "react-router-dom";
import classes from "../styles/Navber.module.css";

export default function Navber() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={(navInfo) => (navInfo.isActive ? classes.active : "")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
