import React from "react";
import EmployeesBirthdaysNames from "./employeesBirthdaysNames/EmployeesBirthdaysNames";

// import s from "./preLoader.module.css";

function EmployeesBirthdays() {
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

  const employeesBirthdaysObject = months.reduce(
    (employeesBirthdaysObject, month) => {
      employeesBirthdaysObject[month] = employeesB.filter((y) => {
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

  return (
    <div>
      {Object.keys(employeesBirthdaysObject).map((key, index) => {
        if (employeesBirthdaysObject[key].length > 0) {
          return (
            <div>
              <li key={index}>{key}</li>
              <EmployeesBirthdaysNames names={employeesBirthdaysObject[key]} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default EmployeesBirthdays;

const employeesB = [
  {
    id: "5e00928d91e7feaa9872ec08",
    firstName: "Yang",
    lastName: "Carson",
    dob: "2019-02-26T16:52:36.244Z",
  },
  {
    id: "5e00928df892b0c84c82db9d",
    firstName: "Dorsey",
    lastName: "Meadows",
    dob: "2019-09-19T09:34:32.083Z",
  },
  {
    id: "5e00928dea77bb8b9a15bdc2",
    firstName: "Roxanne",
    lastName: "Salas",
    dob: "2019-07-13T07:19:20.718Z",
  },
  {
    id: "5e00928db89ff9c2559f9560",
    firstName: "Watson",
    lastName: "Good",
    dob: "2019-05-09T03:24:32.532Z",
  },
  {
    id: "5e00928d43fcdd11688a6afd",
    firstName: "Moody",
    lastName: "Gordon",
    dob: "2019-11-09T20:20:43.744Z",
  },
  {
    id: "5e00928d2100f7134cdea429",
    firstName: "Dunn",
    lastName: "Tillman",
    dob: "2019-03-14T09:42:59.251Z",
  },
];
