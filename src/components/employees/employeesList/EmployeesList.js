import React from "react";
import s from "./employeesList.module.css";
import EmployeesNames from "./employeesNames/EmployeesNames";
import {
  addEmployeeBirthday,
  deleteEmployeeBirthday,
} from "../../../redux/actions/addEmployeeBirthday";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function EmployeesList({ alphabet, employees }) {
  const employeesListObject = alphabet.reduce((employeesListObject, letter) => {
    employeesListObject[letter] = employees.filter(
      (y) => letter.toUpperCase() === y.lastName.charAt(0)
    );
    return employeesListObject;
  }, {});
  const checkedItems = useSelector(
    (state) => state.addEmployees.addedEmployees
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (checkedItems.some((person) => person.id === event.target.name)) {
      dispatch(deleteEmployeeBirthday(event.target.name));
    } else {
      const addedEmployee = employees.find(
        (employee) => employee.id === event.target.name
      );
      const a = { ...addedEmployee, checked: event.target.checked };
      dispatch(addEmployeeBirthday(a));
    }
  };

  return (
    <ul className={s.list}>
      {Object.keys(employeesListObject).map((key, index) => (
        <div className={s.listItemWrapper}>
          <li key={index} className={s.listItem}>
            {key}
          </li>
          <EmployeesNames
            names={employeesListObject[key]}
            checkedItems={checkedItems}
            handleChange={handleChange}
          />
        </div>
      ))}
    </ul>
  );
}

export default EmployeesList;
