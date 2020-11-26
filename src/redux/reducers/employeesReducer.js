import * as types from '../types';
const initialState = {
    employees: [],
    loading: false,
    errors: false
};

export default function employees(state = initialState, action) {
    switch (action.type) {
        case types.FETCHED_DATA_SUCCESS:
            return {
                ...state,
                employees: action.payload,
                loading: false
            };
        case types.EMPLOYEES_DATA_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case types.EMPLOYEES_HAVE_ERRORED:
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state
    }
}

