import { combineReducers } from "redux";
import  employees  from "./employeesReducer";
import addEmployees from "./employeeBirthdayReducer";
export default combineReducers({
  employees, addEmployees
});
