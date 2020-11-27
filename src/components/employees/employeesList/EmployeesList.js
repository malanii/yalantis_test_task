import React from "react";
import s from "./employeesList.module.css";
import EmployeesNames from "./employeesNames/EmployeesNames";

function EmployeesList({ alphabet, employees }) {
  const employeesListObject = alphabet.reduce((employeesListObject, letter) => {
    employeesListObject[letter] = employees.filter(
      (y) => letter.toUpperCase() === y.lastName.charAt(0)
    );
    return employeesListObject;
  }, {});

  return (
    <ul className={s.list}>
      {Object.keys(employeesListObject).map((key, index) => (
        <div className={s.listItemWrapper}>
          <li key={index} className={s.listItem}>
            {key}
          </li>
          <EmployeesNames names={employeesListObject[key]} />
        </div>
      ))}
    </ul>
  );
}

export default EmployeesList;
