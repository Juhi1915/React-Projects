import React from "react";
const searchEmpTable =(props)=>
{
   //debugger;
        return(
            <table className="table table-bordered">
                    <thead>
                      <tr> <th>Employee Name</th> <th>Tech stack</th> <th>Skill</th><th>Experiance</th> </tr>
                    </thead>
                    {/* <tbody>
                    {props.employees.map(emp => (
              <tr>
                  <td>{emp.EmpName}</td>
                  <td>{emp.TechStack}</td>
                  <td>{emp.Skill}</td>
                  <td>{emp.Exp}</td>
              </tr>
            ))}
                    </tbody> */}

                </table>
             
        );
    
}

export default searchEmpTable;