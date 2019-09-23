import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';


function EditUserForm(props) {
  const [user, setUser] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  )
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;


  //   setUser({ ...user, [name]: value }); 
    
  //   console.log(user);
  // }

  const OnNameChange = event => {

    setUser({id:user.id, name: event.target.value, username: user.username });

  }
  const OnUserNameChange = event => {
    setUser({id:user.id, username: event.target.value, name: user.name });

  }


  const [show, setShow] = useState(props.ShowModel);

  const handleClose = () => setShow(false);
  const OnUpdate = (id) => {
    console.log(user);
    debugger;
    props.updateUser(id, user);
  }

  //const handleShow = (user) => { setShow(true); setUser(...user,user); }

  return (
    <>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD_Update DEtails</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!

        <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={OnNameChange} type="text" value={user.name} placeholder="Enter Name" />
              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicUserName">
              <Form.Label>UserName</Form.Label>
              <Form.Control onChange={OnUserNameChange} type="text" value={user.username} placeholder="UserName" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={()=>{
            debugger;
            OnUpdate(user.id)
            }} >
            Update
        </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUserForm
