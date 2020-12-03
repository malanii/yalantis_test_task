import axios from "axios";

export function fetchedDataSuccess(data) {
  return {
    type: "FETCHED_DATA_SUCCESS",
    payload: data,
  };
}
export function employeesDataLoading(bool) {
  return {
    type: "EMPLOYEES_DATA_LOADING",
    payload: bool,
  };
}
export function employeesDataHaveErrored(bool) {
  return {
    type: "EMPLOYEES_DATA_HAS_ERRORS",
    payload: bool,
  };
}
export function fetchEmployees() {
  return (dispatch) => {
    dispatch(employeesDataLoading(true));

    axios
      .get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      .then((res) => {
        dispatch(employeesDataLoading(false));
        dispatch(fetchedDataSuccess(res.data));
      })
      .catch((error) => {
        dispatch(employeesDataHaveErrored(true), employeesDataLoading(false));
        dispatch(employeesDataLoading(false));
        console.log(error.response);
      });
  };
}
