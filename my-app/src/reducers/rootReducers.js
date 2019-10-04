import manageSkills from "./manageSkills";
import technologyStacks from "./technologyStacks";
import seachEmployeeReducer from "./searchEmployeeSkills"
import { combineReducers } from "redux";

export default combineReducers({ manageSkills, technologyStacks,seachEmployeeReducer });
