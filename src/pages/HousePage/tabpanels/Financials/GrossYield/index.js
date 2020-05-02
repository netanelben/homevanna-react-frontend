import React from "react";
import { Row, Col } from "reactstrap";
import "./style.scss";

const GrossYield = () => (
  <div className="GrossYield card-box">
    <Row noGutters>
      <Col sm="2" md="3" lg="2">
        <div className="text-center">
          <div>Gross yield</div>
          <span>9.6%</span>
        </div>
      </Col>

      <Col sm="2" md="3" lg="2">
        <div className="text-center">
          <div>Gross yield</div>
          <span>9.6%</span>
        </div>
      </Col>

      <Col sm="2" md="3" lg="2">
        <div className="text-center">
          <div>CASH ON CASH</div>
          <span>9.6%</span>
        </div>
      </Col>

      <Col sm="2" md="3" lg="2">
        <div className="text-center">
          <div>ANN. RETURN</div>
          <span>
            8.1%
            <span className="lower-text">in 5 Years</span>
          </span>
        </div>
      </Col>

      <Col sm="12" md="3" lg={{ size: 2, offset: 2 }}>
        <button className="btn-blue">Restore to Default</button>
      </Col>
    </Row>
  </div>
);

export default GrossYield;
