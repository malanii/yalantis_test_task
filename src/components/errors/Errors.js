import React from "react";
import s from "./errors.module.css";

function Errors() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.text}>Something went wrong :( </h1>
      <p className={s.text}>Please try again later.</p>
    </div>
  );
}

export default Errors;
