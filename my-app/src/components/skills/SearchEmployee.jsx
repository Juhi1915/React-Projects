import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {html2canvas} from 'html2canvas';
import {jsPDF} from 'jspdf';
import BasicTextInput from "../common/BasicTextInput";
import SelectInput from "../common/SelectInput";
import searchEmpTable from "./searchEmpTable";
import { employeesSkillsActionCreators } from "../../actions/searchEmployeeSkillsAction";

import { technologyStacksActionCreators } from "../../actions/technologyStacksActions";

import { manageSkillsActionCreators } from "../../actions/manageSkillsActions";

class SearchEmployee extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      EmpName: '', // Employee Name
      TechStack: '-1', // Technology stack
      Skill: '', // Skill
      Exp: '0', // Experiance
      Ops: 'Gr' // ==, >=, <=
    }

    //this.onSearch = this.onSearch.bind(this);
  };

  componentDidMount() {
    this.props.actions.populateTechStacks();
    this.props.actions.searchEmployeeSkills(null);
  }

  onSearch = () => {
    debugger;
    console.log(this.state);
    var empskill = {
      EmpName: this.state.EmpName.trim(), // Employee Name
      TechStack: Number(this.state.TechStack.trim()), // Technology stack
      Skill: this.state.Skill.trim(), // Skill
      Exp:this.state.Exp.trim()!=''?Number(this.state.Exp.trim()):0, // Experiance
      Ops: this.state.Ops.trim() //
    }
    this.props.actions.searchEmployeeSkills(empskill)
  }

  printDocument=()=> { debugger;
    let input = document.getElementById('divResult');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        let pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  onChange = e => {
    debugger;
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value })
  }



  render() {
    return (
      <>
        <div className="mb-3 col-md-12"><h2 className='text-center' >Employees Skill Report</h2></div>

        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
            <input type='text' className='form-control' onChange={this.onChange} name='EmpName' placeholder='Enter Employee Name' />
          </div>
          <div className="col-md-6">
            <label>Technology Stack</label>
            <select onChange={this.onChange} name='TechStack' className="form-control">
              <option value='-1'>Select Tech-stack</option>
              {this.props.techSkills.map(tc =>
                (<option value={tc.id}>{tc.name}</option>)
              )}
            </select>
          </div>
          <div className="col-md-6">
            <label>Skill</label>
            <input onChange={this.onChange} type='text' className='form-control' name='Skill' placeholder='Skill' />
          </div>

          <div className="col-md-6">
            <label>Experiance</label>
                <div className='row'>
            <div className="col-md-6 float-left">
              <input className='form-control' type='text' name='Exp' onChange={this.onChange} placeholder='Experiance (e.g. 5)' />
            </div>
            <div className="col-md-6 float-right">
              <select name='Ops' onChange={this.onChange} className="form-control  float-right">
                <option value='Eq'>Equal(==)</option>
                <option value='Gr' selected>Greater than (>=)</option>
                <option value='Ls'>Less than (&lt;=) </option>
              </select>
            </div>
            </div>
          </div>

          <div className="col-md-12 mt-2">
            <button onClick={this.onSearch} className="btn btn-success float-right">Search</button>
            <button className="btn btn-primary float-right" onClick={this.printDocument} >PDF</button>
          </div>
          <div className="col-md-12 mt-2">
          
          </div>

        </div>

        <div className="row" id="divResult">
          <table className="table table-bordered">
            <thead>
              <tr><th>Employee Name</th><th>Tech stack</th><th>Skill</th><th>Experiance</th></tr>
            </thead>
            {

              this.props.employees != null && this.props.employees.length > 0 ?
                (
                  <tbody>
                    {this.props.employees.map(emp => (
                      <tr>
                        <td>{emp.employeeName}</td>
                        <td>{emp.technologyStackName}</td>
                        <td>{emp.skillName}</td>
                        <td>{emp.totalExperienceInYears}</td>
                      </tr>
                    ))}
                  </tbody>
                ) : (<tbody><tr><td>Data not found</td></tr></tbody>)
            }

          </table>
        </div>
      </>

    )
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchEmployee);

function mapStateToProps(state) {
  debugger;
  return {
    isLoading: state.seachEmployeeReducer.isLoading,
    apiError: !state.seachEmployeeReducer.error ? "" : state.seachEmployeeReducer.error,
    employees: state.seachEmployeeReducer.employees ? state.seachEmployeeReducer.employees : state.manageSkills.skills,
    techSkills: state.technologyStacks.techStacks,
    //allEmployees:state.manageSkills.employees
    //skills: state.manageSkills.skills,
    //techSkills: state.technologyStacks.techStacks,
    //addMode: state.manageSkills.addMode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      searchEmployeeSkills: bindActionCreators(
        employeesSkillsActionCreators.loadEmployeeSkills,
        dispatch
      ),
      populateTechStacks: bindActionCreators(
        technologyStacksActionCreators.loadTechnologyStacks,
        dispatch
      )


    }
  };
}