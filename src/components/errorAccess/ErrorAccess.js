import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";


function ErrorAccess() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.text}> Oooops. Something went wrong :(</h1>
      <Link className={s.text} to="/">
        Back to home page

      </Link>
    </div>
  );
}
export default ErrorAccess;
