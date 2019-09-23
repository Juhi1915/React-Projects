import React from 'react'
import {Button,Jumbotron} from 'react-bootstrap';


const UserTable = props => (
  <Jumbotron fluid>
 
  <table  responsive> 
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <Button className="mr-2" 
                onClick={() => {
                  props.editRow(user)
                }}
              
              >
                Edit
              </Button>
              <Button className="mr-2"
                onClick={() => props.deleteUser(user.id)}
                
              >
                Delete
              </Button>
           
              <Button
               onClick={() => props.details(user.id)}
               >
                       Details
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
  </Jumbotron>
  
)

export default UserTable
