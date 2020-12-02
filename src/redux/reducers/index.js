import { combineReducers } from "redux";
import  employees  from "./employeesReducer";
import addEmployees from "./addEmployeeBirthdayReducer";
export default combineReducers({
  employees, addEmployees
});
