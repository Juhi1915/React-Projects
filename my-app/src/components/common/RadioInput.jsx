import React from "react";

const RadioInput = (props) => {  
  const { value, id, label, name, checked, onChange, error }  = props;
  return (
    <>
      <label className="radio-inline">
        <input
          type="radio"
          id={id}
          onChange={onChange}
          name={name}
          value={value}
          checked={checked}
        />
        <span>{label}</span>
      </label>
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default RadioInput;
