import React from "react";
import { Row, Col } from "reactstrap";
import PriceParams from "./PriceParams";
import InvestParams from "./InvestParams";

import "./style.scss";

const PurchaseControls = () => (
  <div className="PurchaseControls card-box">
    <Row noGutters>
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
