import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CustomerList from "./CustomerList";
import CustomerNewModal from "./CustomerNewModal";
import Pagination from "./Pagination";

import axios from "axios";

import { API_URL_CUSTOMER } from "../constants";

class CustomerHome extends Component {
  state = {
    customers: [],
    currentPage: 1,
    totalPages: 100,
  };

  componentDidMount() {
    this.resetState();
  }

  getCustomers = () => {
    const { currentPage } = this.state;
    axios.get(`${API_URL_CUSTOMER}?page=${currentPage}`).then((res) => {
      const { results, count, next, previous } = res.data;
      this.setState({
        customers: results,
        totalPages: Math.ceil(count / 100),
      });
    });
  };

  resetState = () => {
    this.getCustomers();
  };

  handlePageClick = (data) => {
    const { selected } = data;
    this.setState({ currentPage: selected + 1 }, () => this.getCustomers());
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <CustomerList
              customers={this.state.customers}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomerNewModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Pagination
              totalPages={this.state.totalPages}
              handlePageClick={this.handlePageClick}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomerHome;
