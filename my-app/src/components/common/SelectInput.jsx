import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({
  name,
  id,
  label,
  onChange,
  defaultValue,
  defaultText,
  error,
  dataSource,
  textFieldName,
  valueFieldName
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
        <select
          className="form-control"
          id={id}
          onChange={onChange}
          name={name}
          value={defaultValue}
        >
          <option value="">{defaultText || "Select"}</option>
          {dataSource.map((data, key) => {
            return (
              <option key={key} value={data[valueFieldName]} data-key={key}>
                {data[textFieldName]}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  defaultValue: PropTypes.string.isRequired,
  defaultText: PropTypes.string,
  textFieldName: PropTypes.string.isRequired,
  valueFieldName: PropTypes.string.isRequired,
  dataSource: PropTypes.array.isRequired
};

export default SelectInput;
