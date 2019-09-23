import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

function AddUserForm(props) {

	const initialFormState = { name: '', username: '' }
	const [user, setUser] = useState(initialFormState)

	const OnNameChange = event => {


		setUser({ name: event.target.value, username: user.username });

	}
	const OnUserNameChange = event => {
		setUser({ username: event.target.value, name: user.name });

	}

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const OnAdd = (event) => {
		console.log(user);
		props.addUser(user);
		setShow(false);
	}

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Add_Employes
		</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>ADD_NEW_EMPLOYES_DEATILS</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!
	  
		  <Form>
						<Form.Group controlId="formBasicName">
							<Form.Label>Name</Form.Label>
							<Form.Control onChange={OnNameChange} type="text" placeholder="Enter Name" />
							<Form.Text className="text-muted">

							</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicUserName">
							<Form.Label>UserName</Form.Label>
							<Form.Control onChange={OnUserNameChange} type="text" placeholder="UserName" />
						</Form.Group>
						<Form.Group controlId="formBasicChecbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
			</Button>
					<Button variant="primary" onClick={OnAdd}>
						Add
			</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddUserForm