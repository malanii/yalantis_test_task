import React from "react";
import EmployeeDob from "../employeeDob/EmployeeDob";
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
      employeesBirthdaysObject[month] = addedEmployees.filter((y) => {
        const date = new Date(y.dob);
        const monthOfBirth = date.toLocaleString("en-US", { month: "long" });
        if (month === monthOfBirth) {
          return y;
        }
      });
      return employeesBirthdaysObject;
    },
    {}
  );

  if (addedEmployees.length === 0) {
    return <p>No selected employees</p>;
  }

  return (
    <div>
      {Object.keys(employeesBirthdaysObject).map((key, index) => {
        if (employeesBirthdaysObject[key].length > 0) {
          return (
            <div>
              <li key={index}>{key}</li>
              <EmployeeDob names={employeesBirthdaysObject[key]} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default EmployeesDobFullList;