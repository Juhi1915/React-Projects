import React from "react";

import { Modal, Button } from "react-bootstrap";

const ModalPopup = ({
  show,
  closeButtonText,
  addButtonText,
  headingText,
  bodyText,
  handleClose,
  handleClick
}) => (
  <Modal show={show} onHide={event => handleClose(event)}>
    <Modal.Header closeButton>
      <Modal.Title>{headingText}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div dangerouslySetInnerHTML={{ __html: bodyText }} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={event => handleClose(event)}>
        {closeButtonText ? closeButtonText : "Close"}
      </Button>
      <Button variant="primary" onClick={event => handleClick(event)}>
        {addButtonText ? addButtonText : "Save"}
      </Button>
    </Modal.Footer>
  </Modal>
);
export default ModalPopup;
