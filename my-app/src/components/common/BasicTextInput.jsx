import React from "react";
import PropTypes from "prop-types";

const BasicTextInput = ({
  name,
  id,
  onChange,
  value,
  placeholder,
  maxLength
}) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      name={name}
      maxLength={maxLength}
      value={value}
    />
  );
};

BasicTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BasicTextInput.defaultProps = { placeholder: "" };

export default BasicTextInput;
