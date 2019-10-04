import React from "react";
import PropTypes from "prop-types";
import BasicTextInput from "./BasicTextInput";

const TextInput = ({
  name,
  id,
  label,
  onChange,
  value,
  error,
  placeholder,
  maxLength
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>
        {label}
        <span className="text-red">*</span>
      </label>
      <div className="field">
        <BasicTextInput
          placeholder={placeholder}
          id={id}
          onChange={onChange}
          name={name}
          maxLength={maxLength}
          value={value}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TextInput.defaultProps = { placeholder: "", error: "" };

export default TextInput;
