import React from "react";
import s from "./employeesNames.module.css";
// import { useState, useEffect } from "react";

function EmployeesNames({ names, checkedItems, handleChange }) {
  // const [checkedItems, setCheckedItems] = useState({});
  // const handleChange = (event) => {
  //   console.log("checkedItems: ", event.target.name, event.target.checked);
  //   setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
  // };

  if (names.length === 0) {
    return <p> - </p>;
  }

  // if (checkedItems.some((person) => person.id === name.id)){
  //
  //
  // }

  //  у инпута поменяла checked (checkedItems[name.id]
  // console.log(checkedItems[name.id])

 console.log("here---------->",checkedItems);

  return (
    <ul className={s.list}>
      {names.map((name) => {
        if(checkedItems.some((person) => person.id === name.id)){
          return (
              <li key={name.id} className={s.listItem}>
                {name.lastName}
                <span className={s.listItemSpan}>{name.firstName}</span>

                <input
                    name={name.id}
                    type="checkbox"
                    checked
                    onChange={handleChange}
                />
              </li>
          )
        }
        else {
          return (
              <li key={name.id} className={s.listItem}>
                {name.lastName}
                <span className={s.listItemSpan}>{name.firstName}</span>

                <input
                    name={name.id}
                    type="checkbox"

                    onChange={handleChange}
                />
              </li>
          )
        }

      }



      )}
    </ul>
  );
}

export default EmployeesNames;
