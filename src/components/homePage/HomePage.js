import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import Title from "../title/Title";

function HomePage() {
  const contentTitle = "Welcome to the test task!";
  return (
    <div className={s.wrapper}>
      <Title title={contentTitle} />
      <Link className={s.text} to="/employees">
        Explore the employees
      </Link>
      <img className={s.img} src="/img/mainContent.jpg" />
    </div>
  );
}
export default HomePage;
