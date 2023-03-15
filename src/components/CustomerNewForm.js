import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_CUSTOMER } from "../constants";

class CustomerNewForm extends React.Component {
  state = {
    customer_id: "",
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    customer_address: "",
    source: "",
    source_reference_name: "",
  };

  componentDidMount() {
    if (this.props.customer) {
      const {
        customer_id,
        customer_name,
        customer_phone,
        customer_email,
        customer_address,
        source,
        source_reference_name,
      } = this.props.customer;
      this.setState({
        customer_id,
        customer_name,
        customer_phone,
        customer_email,
        customer_address,
        source,
        source_reference_name,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createCustomer = (e) => {
    e.preventDefault();
    axios.post(API_URL_CUSTOMER, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editCustomer = (e) => {
    e.preventDefault();
    axios
      .put(API_URL_CUSTOMER + this.state.customer_id, this.state)
      .then(() => {
        this.props.resetState();
        this.props.toggle();
      });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form
        onSubmit={
          this.props.customer ? this.editCustomer : this.createCustomer
        }>
        <FormGroup>
          <Label for="customer_id">customer_id:</Label>
          <Input
            type="text"
            name="customer_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.customer_id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="customer_name">customer_name:</Label>
          <Input
            type="text"
            name="customer_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.customer_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="customer_phone">customer_phone:</Label>
          <Input
            type="text"
            name="customer_phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.customer_phone)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="customer_email">customer_email</Label>
          <Input
            type="text"
            name="customer_email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.customer_email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="customer_address">customer_address</Label>
          <Input
            type="text"
            name="customer_address"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.customer_address)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="source">source</Label>
          <Input
            type="text"
            name="source"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.preferred_source)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="source_reference_name">source_reference_name</Label>
          <Input
            type="text"
            name="source_reference_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.source_reference_name)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default CustomerNewForm;
