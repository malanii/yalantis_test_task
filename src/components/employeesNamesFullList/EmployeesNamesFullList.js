import React from "react";
import s from "./employeesNamesFullList.module.css";
import EmployeesFilteredNamed from "../employeesFilteredNamed/EmployeesFilteredNamed";
import {
  addEmployeeBirthday,
  deleteEmployeeBirthday,
} from "../../redux/actions/employeeBirthdayAction";
import { useSelector, useDispatch } from "react-redux";

function EmployeesNamesFullList({ alphabet, employees }) {
  const checkedItems = useSelector(
    (state) => state.addEmployees.addedEmployees
  );
  const dispatch = useDispatch();
  const employeesListObject = alphabet.reduce((employeesListObject, letter) => {
    employeesListObject[letter] = employees.filter(
      (y) => letter.toUpperCase() === y.lastName.charAt(0)
    );
    return employeesListObject;
  }, {});

  const handleChange = (event) => {
    if (checkedItems.some((person) => person.id === event.target.name)) {
      dispatch(deleteEmployeeBirthday(event.target.name));
    } else {
      const addedEmployee = employees.find(
        (employee) => employee.id === event.target.name
      );
      dispatch(addEmployeeBirthday(addedEmployee));
    }
  };

  return (
    <ul className={s.list}>
      {Object.keys(employeesListObject).map((key, index) => (
        <div className={s.listItemWrapper}>
          <li key={index} className={s.listItem}>
            {key}
          </li>
          <EmployeesFilteredNamed
            names={employeesListObject[key]}
            checkedItems={checkedItems}
            handleChange={handleChange}
          />
        </div>
      ))}
    </ul>
  );
}

export default EmployeesNamesFullList;
