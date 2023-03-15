import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import CaregiverNewForm from "./CaregiverNewForm";

class CaregiverNewModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Caregiver";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Caregiver";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}>
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <CaregiverNewForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              caregiver={this.props.caregiver}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default CaregiverNewModal;
