import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CaregiverList from "./CaregiverList";
import CaregiverNewModal from "./CaregiverNewModal";
import Pagination from "./Pagination";

import axios from "axios";

import { API_URL_CAREGIVER } from "../constants";

class CaregiverHome extends Component {
  state = {
    caregivers: [],
    currentPage: 1,
    totalPages: 100,
  };

  componentDidMount() {
    this.resetState();
  }

  getCaregivers = () => {
    const { currentPage } = this.state;
    axios.get(`${API_URL_CAREGIVER}?page=${currentPage}`).then((res) => {
      const { results, count, next, previous } = res.data;
      this.setState({
        caregivers: results,
        totalPages: Math.ceil(count / 100),
      });
    });
  };

  resetState = () => {
    this.getCaregivers();
  };

  handlePageClick = (data) => {
    const { selected } = data;
    this.setState({ currentPage: selected + 1 }, () => this.getCaregivers());
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <CaregiverList
              caregivers={this.state.caregivers}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CaregiverNewModal create={true} resetState={this.resetState} />
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

export default CaregiverHome;
