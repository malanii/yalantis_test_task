import React from "react";
// import s from "./employeesNames.module.css";

function EmployeesBirthdaysNames({ names }) {
  return (
    <ul>
      {names.map((el) => {
        const date = new Date(el.dob);
        const month = date.toLocaleString("en-US", { month: "long" });
        return (
          <li key={el.id}>
            {el.firstName} <span> {el.lastName}</span>
            {`${date.getUTCDate()} ${month} , ${date.getFullYear()}`}
          </li>
        );
      })}
    </ul>
  );
}

export default EmployeesBirthdaysNames;
