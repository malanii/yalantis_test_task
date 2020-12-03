import React from "react";
import s from "./employeesDobFullList.module.css";
import EmployeesFilteredDob from "../employeesFilteredDob/EmployeesFilteredDob";
import { useSelector } from "react-redux";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function EmployeesDobFullList() {
  const addedEmployees = useSelector(
    (state) => state.addEmployees.addedEmployees
  );
  const employeesBirthdaysObject = months.reduce(
    (employeesBirthdaysObject, month) => {
      employeesBirthdaysObject[month] = addedEmployees.filter((employee) => {
        const date = new Date(employee.dob);
        const monthOfEmployeeBirth = date.toLocaleString("en-US", {
          month: "long",
        });
        if (month === monthOfEmployeeBirth) {
          return employee;
        }
      });
      return employeesBirthdaysObject;
    },
    {}
  );
  if (addedEmployees.length === 0) {
    return <p className={s.text}>No selected employees</p>;
  }
  return (
    <div>
      {Object.keys(employeesBirthdaysObject).map((key) => {
        if (employeesBirthdaysObject[key].length > 0) {
          return (
            <div>
              <p className={s.text} key={key}>
                {key}
              </p>
              <EmployeesFilteredDob names={employeesBirthdaysObject[key]} />
            </div>
          );
        }
      })}
    </div>
  );
}
export default EmployeesDobFullList;
