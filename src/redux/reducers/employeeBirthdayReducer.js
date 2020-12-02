import * as types from "../types";
const initialState = {
  addedEmployees: [],
};

export default function addEmployees(state = initialState, action) {
  switch (action.type) {
    case types.ADD_BIRTHDAY:
      return {
        ...state,
        addedEmployees: [...state.addedEmployees, action.payload],
      };
    case types.DELETE_BIRTHDAY:
      const addedEmployees = state.addedEmployees.filter(
        (employee) => employee.id !== action.payload
      );
      return { ...state, addedEmployees };

    default:
      return state;
  }
}
