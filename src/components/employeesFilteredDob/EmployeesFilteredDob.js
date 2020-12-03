import React from "react";
import s from "./employeesFilteredDob.module.css";

function EmployeesFilteredDob({ names }) {
  return (
    <ul className={s.list}>
      {names.map((item) => {
        const date = new Date(item.dob);
        const month = date.toLocaleString("en-US", { month: "long" });
        return (
          <li key={item.id} className={s.text}>
            {item.lastName} <span> {item.firstName} - </span>
            <span className={s.textDate}>
              {`${date.getUTCDate()} ${month}, ${date.getFullYear()} year`}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
export default EmployeesFilteredDob;
