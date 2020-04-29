import React from "react";
import { Row, Col } from "reactstrap";
import "./style.scss";

const GrossYield = () => (
  <div className="GrossYield card-box">
    <Row noGutters>
      <Col sm="7">
        <div className="flex">
          <div className="text-center">
            <div>Gross yield</div>
            <span>9.6%</span>
          </div>
          <div className="text-center">
            <div>Gross yield</div>
            <span>9.6%</span>
          </div>
          <div className="text-center">
            <div>CASH ON CASH</div>
            <span>9.6%</span>
          </div>
          <div className="text-center">
            <div>ANN. RETURN</div>
            <span>
              9.6%
              <span className="lower-text">in 5 Years</span>
            </span>
          </div>
        </div>
      </Col>
      <Col sm="5">
        <button className="btn-blue">Restore to Default</button>
      </Col>
    </Row>
  </div>
);

export default GrossYield;
