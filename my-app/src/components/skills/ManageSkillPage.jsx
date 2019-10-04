import React from "react";
import { connect } from "react-redux";
import { manageSkillsActionCreators } from "../../actions/manageSkillsActions";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import Spinner from "../common/Spinner";
import SkillForm from "./SkillForm";
import PropTypes from "prop-types";

import { technologyStacksActionCreators } from "../../actions/technologyStacksActions";

class ManageSkillPage extends React.Component {
  newSkill = {
    id: 0,
    skillName: "",
    totalExperienceInYears: "",
    proficiency: "",
    employeeId: 1,
    technologyStackId: "",
    priorJoining: true
  };
  skillId = 0;

  constructor(props) {
    super(props);
    this.skillId = Number(props.match.params.id || 0);

    this.state = {
      skill: this.newSkill,
      errors: {
        skillName: "",
        totalYearsOfExp: "",
        technologyStackId: "",
        proficiency: ""
      }
    };
  }

  validateTotalYearsOfExp(value) {
    return /^\d{1,2}(\.\d{1,2})?$/.test(value);
  }

  handleChange = ({ target }) => {
    const skill = {
      ...this.state.skill,
      [target.name]:
        target.name === "priorJoining" ? target.value === "Yes" : target.value
    };

    if (target.value) {
      const _errors = { ...this.state.errors, [target.name]: "" };
      this.setState({ errors: _errors });
    }
    this.setState({ skill: skill }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      if (this.skillId === 0) {
        this.props.actions.addSkill(this.state.skill);
      } else this.props.actions.editSkill(this.state.skill);
    }
  };

  validateForm = () => {
    const _errors = {};
    if (!this.state.skill.technologyStackId)
      _errors.technologyStackId = "Technology stack is required";
    if (!this.state.skill.skillName) _errors.skillName = "Skill is required";

    if (!this.state.skill.totalExperienceInYears)
      _errors.totalExperienceInYears = "Total years of experience is required";
    else if (
      this.state.skill.totalExperienceInYears &&
      !this.validateTotalYearsOfExp(this.state.skill.totalExperienceInYears)
    )
      _errors.totalExperienceInYears =
        "Total years of experience value is incorrect";

    if (!this.state.skill.proficiency)
      _errors.proficiency = "Proficiency is required";

    if (Object.keys(_errors).length > 0) {
      this.setState({ errors: _errors });
      return false;
    }
    return true;
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <SkillForm
            skillId={this.skillId}
            skill={this.state.skill}
            errors={this.state.errors}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            apiError={!this.props.apiError ? "" : this.props.apiError}
            techStacks={this.props.techSkills}
          />
        )}
      </>
    );
  }

  componentDidMount() {
    this.props.actions.loadTechnologyStacks();
    if (this.skillId > 0) this.props.actions.getEmployeeSkillById(this.skillId);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoading) {
      if (!nextProps.apiError || nextProps.apiError.length === 0) {
        if (
          this.skillId > 0 &&
          nextProps.techSkills &&
          nextProps.techSkills.length > 0 &&
          nextProps.skills.length > 0
        ) {
          this.setState({
            ...this.state,
            skill: nextProps.skills.find(skill => skill.id === this.skillId)
          });
        }

        if (nextProps.addMode === true && this.skillId === 0) {
          this.setState({ ...this.state, skill: this.newSkill });
          toast.success("Skill added successfully.");
        } else if (nextProps.addMode === false && this.skillId > 0) {
          toast.success("Skill updated successfully.");
          this.props.history.push("/");
        }
      } else if (nextProps.apiError) {
        toast.error("Problem while performing the operation.");
      }
    }
  }
}

ManageSkillPage.propTypes = {
  history: PropTypes.object,
  addMode: PropTypes.bool,
  techSkills: PropTypes.arrayOf(PropTypes.object).isRequired,
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  apiError: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired
};

ManageSkillPage.defaultProps = {
  apiError: null
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSkillPage);

function mapStateToProps(state) {
  return {
    isLoading: state.manageSkills.isLoading,
    apiError: !state.manageSkills.error ? "" : state.manageSkills.error,
    skills: state.manageSkills.skills,
    techSkills: state.technologyStacks.techStacks,
    addMode: state.manageSkills.addMode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addSkill: bindActionCreators(
        manageSkillsActionCreators.addSkill,
        dispatch
      ),
      editSkill: bindActionCreators(
        manageSkillsActionCreators.editSkill,
        dispatch
      ),
      loadTechnologyStacks: bindActionCreators(
        technologyStacksActionCreators.loadTechnologyStacks,
        dispatch
      ),
      getEmployeeSkillById: bindActionCreators(
        manageSkillsActionCreators.getEmployeeSkillById,
        dispatch
      )
    }
  };
}
