import React from "react";
import s from "./employeesContainer.module.css";
import EmployeesList from "./employeesList/EmployeesList";
import Title from "../title/Title";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchEmployees } from "../../redux/actions/getEmployeesAction";
import PreLoader from "../preLoader/PreLoader";
import Errors from "../errors/Errors";
import EmployeesBirthdays from "./employeesBirthdays/EmployeesBirthdays";

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
    return <PreLoader />;
  }
  if (errors) {
    return <Errors />;
  }

  return (
      <div className={s.wrapper}>
        <div className={s.employeesLisWrapper}>
          <Title title={employeesTitle} />
          <EmployeesList alphabet={alphabetArray} employees={employees} />
        </div>
        <div className={s.employeesBirthdaysWrapper}>
          <Title title={employeesBirthdaysTitle} />
          <EmployeesBirthdays />
        </div>
      </div>
  );
}

export default EmployeesContainer;
