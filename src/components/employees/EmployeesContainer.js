import React from "react";
import s from "./employeesContainer.module.css";
import EmployeesList from "./employeesList/EmployeesList";
import Title from "../title/Title";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchEmployees } from "../../redux/actions/getEmployeesAction";

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const employeesTitle = "Employees";
const employeesBirthdaysTitle = "Employees Birthdays";

function EmployeesContainer() {
  const stateOfEmployees = useSelector((state) => state.employees);
  const { employees, loading, errors } = stateOfEmployees;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  if (loading) {
    return <p>Loading</p>;
  }
  if (errors) {
    return <p>Errors</p>;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.employeesLisWrapper}>
        <Title title={employeesTitle} />
        <EmployeesList alphabet={alphabetArray} employees={employees} />
      </div>
      <div className={s.employeesBirthdaysWrapper}>
        <Title title={employeesBirthdaysTitle} />
      </div>
    </div>
  );
}

export default EmployeesContainer;
