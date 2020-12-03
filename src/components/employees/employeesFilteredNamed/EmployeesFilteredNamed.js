import React from "react";
import s from "./style.module.css";

function EmployeesFilteredNamed({ names, addedEmployees, handleChange }) {
  if (names.length === 0) {
    return <p> - </p>;
  }
  return (
    <ul className={s.list}>
      {names.map((name) => (
        <li key={name.id} className={s.listItem}>
          {name.lastName}
          <span className={s.listItemSpan}>{name.firstName}</span>
          <input
            name={name.id}
            type="checkbox"
            checked={!!addedEmployees.some((person) => person.id === name.id)}
            onChange={handleChange}
          />
        </li>
      ))}
    </ul>
  );
}
export default EmployeesFilteredNamed;
