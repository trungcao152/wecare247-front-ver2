import React, { Component } from "react";
import { Table } from "reactstrap";
import CaregiverNewModal from "./CaregiverNewModal";

import CaregiverConfirmRemovalModal from "./CaregiverConfirmRemovalModal";

class CaregiverList extends Component {
  render() {
    const caregivers = this.props.caregivers;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Current Address</th>
            <th>Birth Year</th>
            <th>Skill Level</th>
            <th>Perferred Working Location</th>
            <th>Working Status</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>National ID</th>
            <th>National ID Issue Date</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!caregivers || caregivers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            caregivers.map((caregiver) => (
              <tr key={caregiver.employee_id}>
                <td>{caregiver.employee_id}</td>
                <td>{caregiver.employee_name}</td>
                <td>{caregiver.current_address}</td>
                <td>{caregiver.birth_year}</td>
                <td>{caregiver.skill_level}</td>
                <td>{caregiver.preferred_working_location}</td>
                <td>{caregiver.working_status}</td>
                <td>{caregiver.employee_phone}</td>
                <td>{caregiver.employee_gender}</td>
                <td>{caregiver.national_id}</td>
                <td>{caregiver.national_id_issue_date}</td>
                <td>{caregiver.age}</td>
                <td align="center">
                  <CaregiverNewModal
                    create={false}
                    caregiver={caregiver}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <CaregiverConfirmRemovalModal
                    pk={caregiver.employee_id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default CaregiverList;
