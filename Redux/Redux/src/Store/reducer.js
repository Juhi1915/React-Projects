 const intialState ={
  age :21,
};

const reducer = (state= intialState ,action) => {
 if(action.type==="Age_Up")
 {
   return {...state, age:state.age + 1}
 }else if(action.type==="Age_Down"){
  return {...state, age:state.age-1}
 }else{
   return state;
 }
};

export default reducer;