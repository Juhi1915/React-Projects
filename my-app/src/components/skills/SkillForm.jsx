import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { TextInput, SelectInput, RadioInput } from "./../common/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faBackward } from "@fortawesome/free-solid-svg-icons";

const SkillForm = ({
  skillId,
  skill,
  errors,
  handleSubmit,
  handleChange,
  apiError,
  techStacks
}) => {
  const proficiencies = [
    { value: "Beginner", text: "Beginner" },
    { value: "Intermediate", text: "Intermediate" },
    { value: "Expert", text: "Expert" }
  ];

  const handleHeaderClick = e => {
    debugger;
  };

  //  debugger
  return (
    <form noValidate onSubmit={handleSubmit}>
      {apiError && apiError.length > 0 && (
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-danger">{apiError}</div>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-md-12" onClick={e => handleHeaderClick(e)}>
          <h4>{skillId && skillId > 0 ? "Update" : "Create"} Skill</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <SelectInput
            name="technologyStackId"
            id="technologyStackId"
            label="Technology Stack"
            error={errors.technologyStackId}
            defaultValue={skill.technologyStackId.toString()}
            defaultText="Select technology stack"
            textFieldName="name"
            valueFieldName="id"
            dataSource={techStacks}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <TextInput
            name="skillName"
            id="skillName"
            placeholder="Enter skill name"
            label="Skill"
            error={errors.skillName}
            value={skill.skillName}
            onChange={handleChange}
            maxLength={50}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <label htmlFor="priorJoiningYes">
            Prior Joining Bhavna
            <span className="text-red">*</span>
          </label>
          <div className="field">
            <RadioInput
              name="priorJoining"
              id="priorJoiningYes"
              label="Yes"
              value="Yes"
              onChange={handleChange}
              checked={skill.priorJoining}
            />
            <RadioInput
              name="priorJoining"
              id="priorJoiningYes"
              label="No"
              value="No"
              onChange={handleChange}
              checked={!skill.priorJoining}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <TextInput
            placeholder="Enter total experience"
            name="totalExperienceInYears"
            id="totalExperienceInYears"
            label="Total Experience (in years)"
            error={errors.totalExperienceInYears}
            value={skill.totalExperienceInYears}
            onChange={handleChange}
            maxLength={5}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <SelectInput
            name="proficiency"
            id="proficiency"
            label="Proficiency"
            error={errors.proficiency}
            defaultValue={skill.proficiency}
            defaultText="Select proficiency"
            dataSource={proficiencies}
            onChange={handleChange}
            textFieldName="text"
            valueFieldName="value"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="float-right">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faSave} /> {"  "} Save
            </button>
            {"  "}
            <Link to="/" className="btn btn-info">
              <FontAwesomeIcon icon={faBackward} /> {"  "}Back
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

SkillForm.defaultProps = {
  apiError: "",
  errors: {},
  skillId: 0
};

SkillForm.propTypes = {
  skillId: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  apiError: PropTypes.string.isRequired,
  techStacks: PropTypes.array.isRequired
};

export default SkillForm;
