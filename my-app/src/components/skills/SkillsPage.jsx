import { bindActionCreators } from "redux";
import { manageSkillsActionCreators } from "../../actions/manageSkillsActions";
import React from "react";
import { Link } from "react-router-dom";
import SkillListPage from "./SkillListPage";
import SearchSkill from "./SearchSkill";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../common/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class SkillsPage extends React.Component {
  state = { skills: [], searchType: "TS", searchText: "" };

  render() {
    return (
      <>
        {this.props.isLoading ? <Spinner /> : null}
        <div className="row">
          <div className="col-md-12">
            <h4>Manage Skills</h4>
          </div>
        </div>
        <SearchSkill
          handleChange={this.handleChange}
          searchText={this.state.searchText}
          searchType={this.state.searchType}
        />
        <div className="row">
          <div className="col-md-10">
            <h4>Skills</h4>
          </div>
          <div className="col-md-2">
            <Link to="/create-skill" className="btn btn-info float-right">
              <FontAwesomeIcon icon={faPlus} /> Add
            </Link>
          </div>
        </div>
        <SkillListPage
          skills={this.state.skills}
          isLoading={this.props.isLoading}
          onDelete={skillId => this.handleDeleteSkill(skillId)}
        />
      </>
    );
  }

  handleDeleteSkill = skillId => {
    // console.log(skillId);
    this.props.actions.deleteSkill(skillId);
  };

  handleChange = ({ target }) => {
    
    if (
      target.name === "searchType" &&
      target.value !== this.state.searchType
    ) {
      this.setState(
        {
          ...this.state,
          [target.name]: target.value,
          searchText: ""
        },
        () => {
          this.searchSkills();
        }
      );
    } else
      this.setState({ ...this.state, [target.name]: target.value }, () => {
        this.searchSkills();
      });
  };

  searchSkills() {
    //if (this.state.searchText && this.state.searchText.length > 2) {
    const _skills = this.props.skills.filter(skill => {
      return this.state.searchType === "TS"
        ? skill.technologyStackName
            .toLowerCase()
            .indexOf(this.state.searchText.toLowerCase()) > -1
        : skill.skillName
            .toLowerCase()
            .indexOf(this.state.searchText.toLowerCase()) > -1;
    });
    this.setState({ ...this.state, skills: _skills });
    // }
  }

  componentDidMount() {
    this.props.actions.loadSkills();
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoading) {
      if (!nextProps.apiError || nextProps.apiError.length === 0) {
        this.setState({ ...this.state, skills: nextProps.skills });
      } else if (nextProps.apiError) {
        toast.error("Problem while performing the operation.");
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsPage);

function mapStateToProps(state, ownProps) {
  return {
    skills: state.manageSkills.skills,
    isLoading: state.manageSkills.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(manageSkillsActionCreators, dispatch) };
}
