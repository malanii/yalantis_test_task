import React from "react";
import s from "./style.module.css";

function Footer() {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>
        React.js school<span>&#9734;</span>
      </p>
      <p className={s.text}>by junior frontend developer Yana Ignatova</p>
    </div>
  );
}
export default Footer;
