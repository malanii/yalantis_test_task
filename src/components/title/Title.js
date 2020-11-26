import React from "react";
import s from "./title.module.css";

function Title({title}) {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
    </>
  );
}

export default Title;
