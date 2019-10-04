import actionTypes from "../actions/actionTypes";

const initialState = { techStacks: [], isLoading: false, error: null };

const technologyStacks = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case actionTypes.TECHNOLOGY_STACKS.REQUEST_LOAD_TECH_STACKS:
      return { ...state, isLoading: true };
    case actionTypes.TECHNOLOGY_STACKS.RECEIVE_LOAD_TECH_STACKS:      
      return { ...state, isLoading: false, techStacks: action.techStacks };
    case actionTypes.TECHNOLOGY_STACKS.ERROR_LOAD_TECH_STACKS:
      return { ...state, isLoading: false, error: action.apiError };
    default:
      return state;
  }
};

export default technologyStacks;
