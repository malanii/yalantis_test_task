export function addEmployeeBirthday(employee) {
  return {
    type: "ADD_BIRTHDAY",
    payload: employee,
  };
}
export function deleteEmployeeBirthday(employee) {
  return {
    type: "DELETE_BIRTHDAY",
    payload: employee,
  };
}