import React from "react";
import { Row, Col } from "reactstrap";
import Houston from "./Houston";
import Neighborhood from "./Neighborhood";
import Schools from "./Schools";

import "./style.scss";

const Location = () => (
  <div className="Location card-box">
    <div className="card-title">Location</div>
    <Row>
      <Col md="12" lg="4">
        <Houston />
      </Col>

      <Col md="12" lg="4">
        <Neighborhood />
      </Col>

      <Col md="12" lg="4">
        <Schools />
      </Col>
    </Row>
  </div>
);

export default Location;
