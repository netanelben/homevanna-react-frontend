import React from "react";
import { Row, Col } from "reactstrap";
import Tooltip from "../../../../../components/Tooltip";

import "./style.scss";

const GrossYield = () => (
  <div className="GrossYield card-box">
    <Row>
      <Col xs="6" sm="4" md="3" lg="2">
        <div className="section">
          <div>
            Gross yield
            <Tooltip context="GrossYield" />
          </div>
          <span>9.6%</span>
        </div>
      </Col>

      <Col xs="6" sm="4" md="3" lg="2">
        <div className="section">
          <div>
            Gross yield
            <Tooltip context="GrossYield" />
          </div>
          <span>9.6%</span>
        </div>
      </Col>

      <Col xs="6" sm="4" md="3" lg="2">
        <div className="section">
          <div>
            CASH ON CASH
            <Tooltip context="CashOnCash" />
          </div>
          <span>9.6%</span>
        </div>
      </Col>

      <Col xs="6" sm="4" md="3" lg="2">
        <div className="section">
          <div>
            ANN. RETURN
            <Tooltip context="AnnReturn" />
          </div>
          <span>
            8.1%
            <span className="lower-text">in 5 Years</span>
          </span>
        </div>
      </Col>

      <Col md="12" lg="4">
        <button className="btn-blue">Restore to Default</button>
      </Col>
    </Row>
  </div>
);

export default GrossYield;
