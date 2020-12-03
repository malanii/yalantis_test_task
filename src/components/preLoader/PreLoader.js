import React from "react";
import s from "./style.module.css";

function PreLoader() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.text}>Loading............</h1>
    </div>
  );
}
export default PreLoader;
