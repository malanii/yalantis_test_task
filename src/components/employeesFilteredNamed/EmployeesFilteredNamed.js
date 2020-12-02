import React from "react";
import s from "./employeesFilteredNamed.module.css";

function EmployeesFilteredNamed({ names, checkedItems, handleChange }) {
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
            checked={!!checkedItems.some((person) => person.id === name.id)}
            onChange={handleChange}
          />
        </li>
      ))}
    </ul>
  );
}

export default EmployeesFilteredNamed;
