import React from "react";
import s from "./employeesFilteredDob.module.css";

function EmployeesFilteredDob({ names }) {
  return (
    <ul className={s.list}>
      {names.map((el) => {
        const date = new Date(el.dob);
        const month = date.toLocaleString("en-US", { month: "long" });
        return (
          <li key={el.id} className={s.title}>
            {el.firstName} <span> {el.lastName} </span>
              {`${date.getUTCDate()} ${month}, ${date.getFullYear()}`}
          </li>
        );
      })}
    </ul>
  );
}

export default EmployeesFilteredDob;
