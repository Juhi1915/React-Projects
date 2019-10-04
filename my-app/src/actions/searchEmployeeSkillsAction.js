import actionTypes from "./actionTypes";

const API_URL = "https://localhost:44331/api/";

export const requestEmployeeSkill = () => {
  return { type: actionTypes.Employee_Skills.REQUEST_EMPLOYEE_SKILLS };
};

export const receiveEmployeeSkill = employees => {
  return {
    type: actionTypes.Employee_Skills.RECEIVE_EMPLOYEE_SKILLS,
    employees
  };
};

export const errorEmployeeSkill = apiError => {
  return {
    type: actionTypes.Employee_Skills.ERROR_EMPLOYEE_SKILLS,
    apiError
  };
};

export const employeesSkillsActionCreators = { 
  loadEmployeeSkills: (myobj) => async dispatch => {
     debugger;
    console.log("inputs send by search button click");
    console.log(myobj);
    dispatch(requestEmployeeSkill());

    const url = API_URL + `ManageSkills`;
    const response = await fetch(url);
    let responseData = await response.json();    
    //
     //console.log(responseData);
    //apply filter
    
    debugger;
    
// var res=myobj!=null? responseData.map(function(empSkill){
// switch(myobj.Ops)
// {

//   case "Eq" :if( (myobj.EmpName!='' ? myobj.EmpName: empSkill.employeeName).includes(empSkill.employeeName)&&
//   (myobj.Skill | empSkill.skillName).includes(empSkill.skillName) &&
//   (myobj.Exp | empSkill.totalExperienceInYears)==empSkill.totalExperienceInYears) return empSkill;
//   break;

//   case "Gr" :if( (myobj.EmpName!='' ? myobj.EmpName: empSkill.employeeName).includes(empSkill.employeeName)&&
//   (myobj.Skill | empSkill.skillName).includes(empSkill.skillName) &&
//   (myobj.Exp | empSkill.totalExperienceInYears)>=empSkill.totalExperienceInYears) return empSkill;
//   break;

//   case "Ls" :if( (myobj.EmpName | empSkill.employeeName).includes(empSkill.employeeName)&&
//   (myobj.Skill | empSkill.skillName).includes(empSkill.skillName) &&
//   (myobj.Exp | empSkill.totalExperienceInYears)<=empSkill.totalExperienceInYears) return empSkill;
//   break;

// }
// }): responseData;

    debugger;
    let responseDataResult=myobj!=null?( myobj.Ops=='Eq'? responseData.filter(emp=>emp.employeeName.includes(myobj.EmpName)
    && emp.skillName.includes(myobj.Skill) &&(emp.technologyStackId==myobj.TechStack||myobj.TechStack==-1) && emp.totalExperienceInYears==myobj.Exp):
    myobj.Ops=='Gr'?
    responseData.filter(emp=>emp.employeeName.includes(myobj.EmpName)
    && emp.skillName.includes(myobj.Skill) &&(emp.technologyStackId==myobj.TechStack||myobj.TechStack==-1) && emp.totalExperienceInYears>=myobj.Exp):
    responseData.filter(emp=>emp.employeeName.includes(myobj.EmpName)
    && emp.skillName.includes(myobj.Skill) &&(emp.technologyStackId==myobj.TechStack||myobj.TechStack==-1) && emp.totalExperienceInYears<=myobj.Exp)
    ):responseData;
  
    
 
    if (response.status === 200) 
    dispatch(receiveEmployeeSkill(responseDataResult));
    else dispatch(errorEmployeeSkill(responseDataResult));
  }


};
