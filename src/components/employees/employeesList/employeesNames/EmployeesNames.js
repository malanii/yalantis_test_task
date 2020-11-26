import React from "react";
import s from "./employeesNames.module.css";

function EmployeesNames({ names }) {
  if (names.length === 0) {
    return <p> - </p>;
  }
  return (
    <ul className={s.list}>
      {names.map((name) => (
        <li key={name.id} className={s.listItem}>
          {name.lastName}
          <span className={s.listItemSpan}>{name.firstName}</span>
          <input type="checkbox" />
        </li>
      ))}
    </ul>
  );
}

export default EmployeesNames;
