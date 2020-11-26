import React from "react";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import {Route} from 'react-router-dom';
import s from "./App.module.css";
import Content from "./components/content/Content";
import EmployeesContainer from "./components/employees/EmployeesContainer";
function App() {
  return (
    <div className={s.wrapper}>
      <NavBar />
      <Route exact path='/' component={Content}/>
      <Route path='/employees' component={EmployeesContainer}/>
      <Footer />
    </div>
  );
}

export default App;
