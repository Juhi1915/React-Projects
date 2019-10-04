import actionTypes from "../actions/actionTypes";

const initialState = { employees: [], isLoading: false, error: null };

const seachEmployeeReducer = (state, action) => { debugger;
  state = state || initialState;
console.log(action.employees );
  switch (action.type) {
    case actionTypes.Employee_Skills.REQUEST_EMPLOYEE_SKILLS:
      return { ...state, isLoading: true };
    case actionTypes.Employee_Skills.RECEIVE_EMPLOYEE_SKILLS:      
      return { ...state, isLoading: false, employees: action.employees };
    case actionTypes.Employee_Skills.ERROR_EMPLOYEE_SKILLS:
      return { ...state, isLoading: false, error: action.apiError };
    default:
      return state;
  }
};

export default seachEmployeeReducer;
