import actionTypes from "../actions/actionTypes";

const initialState = {
  skills: [],
  isLoading: false,
  error: null,
  addMode: null
};
const manageSkills = (state, action) => {
  state = state || initialState;
  // console.log(state);
  switch (action.type) {
    case actionTypes.REQUEST_LOAD_SKILLS: {
      return { ...state, addMode: null, isLoading: true };
    }
    case actionTypes.RECEIVE_LOAD_SKILLS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        skills: action.skills
      };
    }
    case actionTypes.ERROR_LOAD_SKILLS: {
      return {
        ...state,
        isLoading: false,
        error: action.apiError
      };
    }
    case actionTypes.ERROR_ADD_SKILL: {
      return {
        ...state,
        isLoading: false,
        error: action.apiError
      };
    }
    case actionTypes.REQUEST_ADD_SKILL: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actionTypes.RECEIVE_ADD_SKILL: {
      return {
        ...state,
        isLoading: false,
        error: null,
        addMode: true,
        skills: [...state.skills, action.skill]
      };
    }
    case actionTypes.REQUEST_EDIT_SKILL: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actionTypes.RECEIVE_EDIT_SKILL: {
      return {
        ...state,
        isLoading: false,
        error: null,
        addMode: false,
        skills: state.skills.map(skill =>
          skill.id === action.skill.id ? { ...action.skill } : skill
        )
      };
    }
    case actionTypes.ERROR_EDIT_SKILL: {
      return {
        ...state,
        isLoading: false,
        error: action.apiError
      };
    }
    case actionTypes.REQUEST_DELETE_SKILL: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actionTypes.RECEIVE_DELETE_SKILL: {
      return {
        ...state,
        isLoading: false,
        error: null,
        skills: state.skills.filter(skill => {
          return skill.id !== action.skillId;
        })
      };
    }
    case actionTypes.ERROR_DELETE_SKILL: {
      return {
        ...state,
        isLoading: false,
        error: action.apiError
      };
    }
    case actionTypes.REQUEST_EMPLOYEE_SKILL_BY_ID: {
      return { ...state, isLoading: true };
    }
    case actionTypes.RECEIVE_EMPLOYEE_SKILL_BY_ID: {
      return {
        ...state,
        isLoading: false,
        error: null,
        skills:
          state.skills.length > 0
            ? state.skills.map(skill =>
                skill.id === action.skill.id ? { ...action.skill } : skill
              )
            : [...state.skills, action.skill]
      };
    }
    default:
      return state;
  }
};

export default manageSkills;
