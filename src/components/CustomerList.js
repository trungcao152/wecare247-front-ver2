import React, { Component } from "react";
import { Table } from "reactstrap";
import CustomerNewModal from "./CustomerNewModal";

import CustomerConfirmRemovalModal from "./CustomerConfirmRemovalModal";

class CustomerList extends Component {
  render() {
    const customers = this.props.customers;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Customer Phone</th>
            <th>Customer Email</th>
            <th>Customer Address</th>
            <th>Source</th>
            <th>Source Reference Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!customers || customers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <tr key={customer.customer_id}>
                <td>{customer.customer_id}</td>
                <td>{customer.customer_name}</td>
                <td>{customer.customer_phone}</td>
                <td>{customer.customer_email}</td>
                <td>{customer.customer_address}</td>
                <td>{customer.source}</td>
                <td>{customer.source_reference_name}</td>
                <td align="center">
                  <CustomerNewModal
                    create={false}
                    customer={customer}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <CustomerConfirmRemovalModal
                    pk={customer.customer_id}
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

export default CustomerList;
