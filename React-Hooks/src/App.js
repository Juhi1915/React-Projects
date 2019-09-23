import React, { useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "./pic.png"
const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Swati Pandey', username: 'Swati Hr' },

	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)
	

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = id => {
		setEditing(false);
		if (window.confirm("Are you sure You want to delete")) {
			setUsers(users.filter(user => user.id !== id))
		}

	}

	const updateUser = (id, updatedUser) => {		
		console.log(updatedUser);
		setEditing(false)
debugger
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = (user) => {
		setEditing(true)
		debugger;
		//console.log(updatedUser);
		//setUsers(users.map(user => (user.id === id ? updatedUser : user)))
		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}
	const detailUser = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	
	return (

		<div className="container">
			<img src={pic} alt="mypic" width="200px" />
			
			{/* <h1>Managing Employees Details</h1> */}

			<div className="container">

				{editing ? (
					<>
						{/* <h2>Edit user</h2> */}
						<EditUserForm
							editing={editing}
							ShowModel={editing}
							setEditing={setEditing}
							currentUser={currentUser}
							updateUser={updateUser}
						/>
					</>
				) : (
						<>
							<h2>Add New Employees</h2>
							<AddUserForm addUser={addUser} />
						</>
					)}
			</div>
			<div className="flex-large">
				{/* <h2>Employes Details</h2> */}
				<UserTable users={users} editRow={editRow} deleteUser={deleteUser} detailUser={detailUser} />
			</div>
		</div>

	)
}

export default App
