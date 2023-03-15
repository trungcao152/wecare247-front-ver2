import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaregiverHeader from "./components/CaregiverHeader";
import CaregiverHome from "./components/CaregiverHome";
import CustomerHeader from "./components/CustomerHeader";
import CustomerHome from "./components/CustomerHome";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Fragment>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <CaregiverHeader />
                  <CaregiverHome />
                </>
              }
            />
            <Route
              path="/customer"
              element={
                <>
                  <CustomerHeader />
                  <CustomerHome />
                </>
              }
            />
          </Routes>
        </Fragment>
      </Router>
    );
  }
}

export default App;
