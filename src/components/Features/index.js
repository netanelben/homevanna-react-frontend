import React, { useState } from "react";
import { Row, Col } from "reactstrap";

import "./style.scss";

const Features = ({
  occupancy,
  lotSize,
  leastStart,
  leastEnd,
  HOA,
  floodRisk,
}) => {
  return (
    <div className="Features">
      <div className="card-title">Features</div>
      <Row>
        <Col sm="6">check</Col>

        <Col sm="6">
          <ul className="list">
            <li className="flex">
              <span>Occupancy</span>
              <span>{occupancy}</span>
            </li>
            <li className="flex">
              <span>Lot Size</span>
              <span>{lotSize}</span>
            </li>
            <li className="flex">
              <span>Least Start</span>
              <span>{leastStart}</span>
            </li>
            <li className="flex">
              <span>Least End</span>
              <span>{leastEnd}</span>
            </li>
            <li className="flex">
              <span>HOA</span>
              <span>{HOA}</span>
            </li>
            <li className="flex">
              <span>Flood Risk</span>
              <span>{floodRisk}</span>
            </li>
          </ul>

          <a href="#">> See more in Analysis</a>
        </Col>
      </Row>
    </div>
  );
};

Features.defaultProps = {
  occupancy: "Occupied",
  lotSize: "6,200",
  leastStart: "12/25/2019",
  leastEnd: "12/25/2019",
  HOA: "None",
  floodRisk: "Not Required",
};

export default Features;
