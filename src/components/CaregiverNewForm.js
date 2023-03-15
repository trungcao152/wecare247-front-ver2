import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_CAREGIVER } from "../constants";

class CaregiverNewForm extends React.Component {
  state = {
    employee_id: "",
    employee_name: "",
    current_address: "",
    birth_year: "",
    skill_level: "",
    preferred_working_location: "",
    working_status: "",
    employee_phone: "",
    employee_gender: "",
    national_id: "",
    national_id_issue_date: "",
    age: "",
  };

  componentDidMount() {
    if (this.props.caregiver) {
      const {
        employee_id,
        employee_name,
        current_address,
        birth_year,
        skill_level,
        preferred_working_location,
        working_status,
        employee_phone,
        employee_gender,
        national_id,
        national_id_issue_date,
        age,
      } = this.props.caregiver;
      this.setState({
        employee_id,
        employee_name,
        current_address,
        birth_year,
        skill_level,
        preferred_working_location,
        working_status,
        employee_phone,
        employee_gender,
        national_id,
        national_id_issue_date,
        age,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createCaregiver = (e) => {
    e.preventDefault();
    axios.post(API_URL_CAREGIVER, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editCaregiver = (e) => {
    e.preventDefault();
    axios
      .put(API_URL_CAREGIVER + this.state.employee_id, this.state)
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
          this.props.caregiver ? this.editCaregiver : this.createCaregiver
        }>
        <FormGroup>
          <Label for="employee_id">employee_id:</Label>
          <Input
            type="text"
            name="employee_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.employee_id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="employee_name">employee_name:</Label>
          <Input
            type="text"
            name="employee_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.employee_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="current_address">current_address:</Label>
          <Input
            type="text"
            name="current_address"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.current_address)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="birth_year">birth_year</Label>
          <Input
            type="text"
            name="birth_year"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.birth_year)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="skill_level">skill_level </Label>
          <Input
            type="text"
            name="skill_level "
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.skill_level)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="preferred_working_location">
            preferred_working_location
          </Label>
          <Input
            type="text"
            name="preferred_working_location"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.preferred_working_location)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="working_status">working_status</Label>
          <Input
            type="text"
            name="working_status"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.working_status)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="employee_phone">employee_phone</Label>
          <Input
            type="text"
            name="employee_phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.employee_phone)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="employee_gender">employee_gender</Label>
          <Input
            type="text"
            name="employee_gender"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.employee_gender)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="national_id">national_id</Label>
          <Input
            type="text"
            name="national_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.national_id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="national_id_issue_date">national_id_issue_date</Label>
          <Input
            type="text"
            name="national_id_issue_date"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.national_id_issue_date)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">age </Label>
          <Input
            type="text"
            name="age"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.age)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default CaregiverNewForm;
