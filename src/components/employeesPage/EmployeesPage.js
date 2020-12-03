import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./employeesPage.module.css";
import EmployeesNamesFullList from "../employeesNamesFullList/EmployeesNamesFullList";
import Title from "../title/Title";
import PreLoader from "../preLoader/PreLoader";
import ErrorAccess from "../errorAccess/ErrorAccess";
import EmployeesDobFullList from "../employeesDobFullList/EmployeesDobFullList";
import { fetchEmployees } from "../../redux/actions/getEmployeesAction";

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const employeesTitle = "Employees";
const employeesBirthdaysTitle = "Employees Birthdays";

function EmployeesPage() {
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
    return <ErrorAccess />;
  }
  return (
    <div className={s.wrapper}>
      <div className={s.employeesLisWrapper}>
        <Title title={employeesTitle} />
        <EmployeesNamesFullList
          alphabet={alphabetArray}
          employees={employees}
        />
      </div>
      <div className={s.employeesBirthdaysWrapper}>
        <Title title={employeesBirthdaysTitle} />
        <EmployeesDobFullList />
      </div>
    </div>
  );
}
export default EmployeesPage;
