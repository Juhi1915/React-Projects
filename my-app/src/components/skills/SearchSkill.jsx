import React from "react";
import RadioInput from "../common/RadioInput";
import BasicTextInput from "../common/BasicTextInput";
import PropTypes from "prop-types";

const SearchSkill = ({ handleChange, searchType, searchText }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <label>Search By</label>
        </div>
        <div className="col-md-6">
          <div className="field">
            <RadioInput
              name="searchType"
              id="searchByTS"
              label="Technology Stack"
              value="TS"
              onChange={handleChange}
              checked={searchType === "TS"}
            />
            <RadioInput
              name="searchType"
              id="searchByTSSkill"
              label="Skill"
              value="Skill"
              onChange={handleChange}
              checked={searchType === "Skill"}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <label>Search</label>
        </div>
        <div className="col-md-6">
          <BasicTextInput
            name="searchText"
            id="searchText"
            placeholder="Enter text to search"
            value={searchText}
            onChange={handleChange}
            maxLength={50}
          />
        </div>
      </div>
    </>
  );
};

SearchSkill.protoTypes = {
  handleChange: PropTypes.func.isRequired,
  searchType: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired
};

export default SearchSkill;
