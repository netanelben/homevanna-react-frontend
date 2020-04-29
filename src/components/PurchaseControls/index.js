import React from "react";
import { Row, Col } from "reactstrap";
import PriceParams from "./PriceParams";
import InvestParams from "./InvestParams";

import "rc-slider/assets/index.css";
import "./style.scss";

const PurchaseControls = () => (
  <div className="PurchaseControls card-box">
    <Row>
      <Col sm="6">
        <PriceParams />
      </Col>
      <Col sm="6">
        <InvestParams />
      </Col>
    </Row>
  </div>
);

export default PurchaseControls;
