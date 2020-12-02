import React from "react";
import s from "./employeesFilteredNamed.module.css";

function EmployeesFilteredNamed({ names, checkedItems, handleChange }) {
  if (names.length === 0) {
    return <p> - </p>;
  }

  return (
    <ul className={s.list}>
      {names.map((name) => (
        <li key={name.id} className={s.listItem} >
          {name.lastName}
          <span className={s.listItemSpan}>{name.firstName}</span>

   <input
       className={s.customInput}
       name={name.id}
       type="checkbox"
       checked={!!checkedItems.some((person) => person.id === name.id)}
      onChange={handleChange}
   />
  {/*<label htmlFor={name.id}></label>*/}


        </li>
      ))}
    </ul>
  );
}

export default EmployeesFilteredNamed;
