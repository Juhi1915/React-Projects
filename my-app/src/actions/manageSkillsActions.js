import actionTypes from "./actionTypes";

const API_URL = "https://localhost:44331/api/";
const API_ERROR_MESSAGE = "Problem while performing the operation.";
const API_SETTINGS = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

export function requestLoadSkills() {
  return {
    type: actionTypes.REQUEST_LOAD_SKILLS
  };
}

export function receiveLoadSkills(skills) {
  return {
    type: actionTypes.RECEIVE_LOAD_SKILLS,
    skills,
    receivedAt: Date.now()
  };
}

export function receiveLoadSkillsError(apiError) {
  return {
    type: actionTypes.ERROR_LOAD_SKILLS,
    apiError,
    receivedAt: Date.now()
  };
}

export function requestAddSkill() {
  return {
    type: actionTypes.REQUEST_ADD_SKILL
  };
}

export function receiveAddSkill(skill) {
  return {
    type: actionTypes.RECEIVE_ADD_SKILL,
    skill,
    receivedAt: Date.now()
  };
}

export function receiveAddSkillError(apiError) {
  return {
    type: actionTypes.ERROR_ADD_SKILL,
    apiError,
    receivedAt: Date.now()
  };
}
export function requestEditSkill(skill) {
  return {
    type: actionTypes.REQUEST_EDIT_SKILL,
    skill
  };
}

export function receiveEditSkillError(apiError) {
  return {
    type: actionTypes.ERROR_EDIT_SKILL,
    apiError,
    receivedAt: Date.now()
  };
}

export function receiveEditSkill(skill) {
  return {
    type: actionTypes.RECEIVE_EDIT_SKILL,
    skill
  };
}

//Delete
export function requestDeleteSkill(skillId) {
  return {
    type: actionTypes.REQUEST_DELETE_SKILL,
    skillId
  };
}

export function receiveDeleteSkill(skillId) {
  return {
    type: actionTypes.RECEIVE_DELETE_SKILL,
    skillId
  };
}

export function receiveDeleteSkillError(apiError) {
  return {
    type: actionTypes.ERROR_DELETE_SKILL,
    apiError,
    receivedAt: Date.now()
  };
}

//Get employee skill by id
export function requestEmployeeSkillById() {
  return {
    type: actionTypes.REQUEST_DELETE_SKILL
  };
}

export function receiveEmployeeSkillById(skill) {
  return {
    type: actionTypes.RECEIVE_EMPLOYEE_SKILL_BY_ID,
    skill,
    receivedAt: Date.now()
  };
}

export const manageSkillsActionCreators = {
  loadSkills: () => async (dispatch) => {
    dispatch(requestLoadSkills());
    try {
      const url = API_URL + `ManageSkills`;
      const response = await fetch(url);
      if (response.status === 200)
        dispatch(receiveLoadSkills(await response.json()));
      else dispatch(receiveLoadSkillsError(await response.json()));
    } catch (error) {
      dispatch(receiveLoadSkillsError(API_ERROR_MESSAGE));
    }
  },
  addSkill: skill => async (dispatch) => {
    dispatch(requestAddSkill());
    try {
      const url = API_URL + `ManageSkills`;

      ////test

      API_SETTINGS.method = "POST";
      API_SETTINGS.body = JSON.stringify(skill);

      const response = await fetch(url, API_SETTINGS);

      // console.log(response);
      if (response.status === 200)
        dispatch(receiveAddSkill(await response.json()));
      else dispatch(receiveAddSkillError(await response.json()));
    } catch (error) {
      dispatch(receiveAddSkillError(API_ERROR_MESSAGE));
    }
  },
  editSkill: skill => async (dispatch) => {
    dispatch(requestEditSkill());
    try {
      const url = API_URL + `ManageSkills/${skill.id}`;

      API_SETTINGS.method = "PUT";
      API_SETTINGS.body = JSON.stringify(skill);

      const response = await fetch(url, API_SETTINGS);

      if (response.status === 200)
        dispatch(receiveEditSkill(await response.json()));
      else if (response.status === 400)
        dispatch(receiveEditSkillError(await response.json()));
      else dispatch(receiveEditSkillError(API_ERROR_MESSAGE));
    } catch (error) {
      dispatch(receiveEditSkillError(API_ERROR_MESSAGE));
    }
  },
  deleteSkill: skillId => async (dispatch) => {
    dispatch(requestDeleteSkill());
    try {
      const url = API_URL + `ManageSkills/${skillId}`;

      API_SETTINGS.method = "DELETE";

      const response = await fetch(url, API_SETTINGS);

      if (response.status === 200) dispatch(receiveDeleteSkill(skillId));
      else if (response.status === 400)
        dispatch(receiveDeleteSkillError(await response.json()));
      else dispatch(receiveDeleteSkillError(API_ERROR_MESSAGE));
    } catch (error) {
      dispatch(receiveDeleteSkillError(API_ERROR_MESSAGE));
    }
  },
  getEmployeeSkillById: skillId => async (dispatch) => {
    try {
      dispatch(requestEmployeeSkillById());
      const url = API_URL + `ManageSkills/GetEmployeeSkillById/${skillId}`;

      API_SETTINGS.method = "GET";
      const response = await fetch(url, API_SETTINGS);

      if (response.status === 200)
        dispatch(receiveEmployeeSkillById(await response.json()));
      // else if (response.status === 400)
      //   dispatch(receiveEditSkillError(await response.json()));
      // else dispatch(receiveEditSkillError(API_ERROR_MESSAGE));
    } catch (error) {
      debugger;
      console.log(error);
      dispatch(receiveEditSkillError(API_ERROR_MESSAGE));
    }
  }
};
