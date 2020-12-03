import React from "react";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import { Route } from "react-router-dom";
import s from "./App.module.css";
import HomePage from "./components/homePage/HomePage";
import EmployeesPage from "./components/employees/employeesPage/EmployeesPage";
function App() {
  return (
    <div className={s.wrapper}>
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route path="/employees" component={EmployeesPage} />
      <Footer />
    </div>
  );
}

export default App;
