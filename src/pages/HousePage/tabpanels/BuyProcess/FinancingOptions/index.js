import React from "react";
import { Row, Col } from "reactstrap";
import Prices from "./Prices";
import LoanTerms from "./LoanTerms";
import UploadLetter from "./UploadLetter";

import "./style.scss";

const FinancingOptions = () => (
  <div className="FinancingOptions card-box">
    <div className="card-title">Financing Options</div>

    <Row>
      <Col xs="12" md="3">
        <Prices />
      </Col>
      <Col xs="12" md="6">
        <LoanTerms />
      </Col>
      <Col xs="12" md="3">
        <UploadLetter />
      </Col>
    </Row>
  </div>
);

export default FinancingOptions;
