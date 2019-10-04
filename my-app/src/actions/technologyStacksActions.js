import actionTypes from "./actionTypes";

const API_URL = "https://localhost:44331/api/";

export const requestLoadTechStacks = () => {
  return { type: actionTypes.TECHNOLOGY_STACKS.REQUEST_LOAD_TECH_STACKS };
};

export const receiveLoadTechStacks = techStacks => {
  return {
    type: actionTypes.TECHNOLOGY_STACKS.RECEIVE_LOAD_TECH_STACKS,
    techStacks
  };
};

export const errorLoadTechStacks = apiError => {
  return {
    type: actionTypes.TECHNOLOGY_STACKS.ERROR_LOAD_TECH_STACKS,
    apiError
  };
};

export const technologyStacksActionCreators = {
  loadTechnologyStacks: () => async dispatch => {
    dispatch(requestLoadTechStacks());

    const url = API_URL + `TechnologyStacks`;
    const response = await fetch(url);
    let responseData = await response.json();
    // console.log(response);
    if (response.status === 200) dispatch(receiveLoadTechStacks(responseData));
    else dispatch(errorLoadTechStacks(responseData));
  }
};
