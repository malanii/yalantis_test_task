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
    type: "EMPLOYEES_DATA_HAVE_ERRORED",
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
        dispatch(employeesDataHaveErrored(true));
        console.log(error.response);
      });
  };
}
