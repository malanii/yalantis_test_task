import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

function NavBar() {
  return (
    <ul className={s.nav}>
      <li>
        <NavLink exact to="/">
          <img className={s.logoImg} src="/img/logo.png" />
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navItem} to="/employees">
          Employees
        </NavLink>
      </li>
    </ul>
  );
}
export default NavBar;
