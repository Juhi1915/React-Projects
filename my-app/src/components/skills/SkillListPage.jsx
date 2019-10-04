import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPen } from "@fortawesome/free-solid-svg-icons";
// import ModalPopup from "../common/ModalPopup";
import PropTypes from "prop-types";
import { ModalPopup } from "./../common/index";

class SkillListPage extends React.Component {
  skillToDelete = {};
  render() {
    return (
      <>
        <ModalPopup
          show={this.state.showConfirmModal}
          closeButtonText="No"
          addButtonText="Yes"
          headingText="Delete confirmation"
          bodyText={`Are you sure to delete the skill - <b>${
            this.skillToDelete.skillName
          }</b>?`}
          handleClose={this.handleDeleteModalCancel}
          handleClick={this.handleDeleteModalConfirm}
        />

        <div className="row">
          <div className="col-md-12">
            <table
              className="table table-bordered table-responsive-lg table-hover"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Technology Stack</th>
                  <th>Skill</th>
                  <th>Prior Joining</th>
                  <th>Total Years of Experience</th>
                  <th>Proficiency</th>
                  <th>Action(s)</th>
                </tr>
              </thead>
              {this.props.skills && this.props.skills.length > 0 && (
                <tbody>
                  {this.props.skills.map(skill => {
                    return (
                      <tr key={skill.id}>
                        <td>{skill.employeeName}</td>
                        <td>{skill.technologyStackName}</td>
                        <td>{skill.skillName}</td>
                        <td>{skill.priorJoining ? "Yes" : "No"}</td>
                        <td>{skill.totalExperienceInYears}</td>
                        <td>{skill.proficiency}</td>
                        <td>
                          <Link
                            to={"/create-skill/" + skill.id}
                            className="btn btn-info"
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </Link>
                          {"  "}
                          <button
                            className="btn btn-danger"
                            onClick={event => this.handleDelete(event, skill)}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {(!this.props.skills || this.props.skills.length === 0) && (
                <tbody>
                  <tr>
                    <td colSpan="7" className="text-center">
                      <b>No skill found.</b>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </>
    );
  }
  state = { showConfirmModal: false };

  handleDelete = (event, skill) => {
    event.preventDefault();
    this.skillToDelete = skill;
    this.setState({ showConfirmModal: true });
  };

  handleDeleteModalConfirm = event => {
    event.preventDefault();
    this.props.onDelete(this.skillToDelete.id);
  };

  handleDeleteModalCancel = event => {
    if (event) event.preventDefault();
    this.skillToDelete = {};
    this.setState({ showConfirmModal: false });
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoading) {
      this.setState({ showConfirmModal: false });
    }
  }
  componentDidMount() {}
}
SkillListPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired
};
export default SkillListPage;
