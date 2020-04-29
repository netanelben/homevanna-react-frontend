import React, { useState } from "react";
import { Row, Col, TabContent, TabPane, Nav, NavItem } from "reactstrap";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./style.scss";

const PurchaseControls = () => {
  const [purchasePrice, setPurchasePrice] = useState(314000);
  const [downPayment, setDownPayment] = useState(80);

  return (
    <div className="PurchaseControls card-box">
      <Row className="main-row" noGutters>
        <Col sm="6">
          <div className="section">
            <div className="title flex">
              Purchase Price
              <span>${purchasePrice}</span>
            </div>
            <Slider
              value={purchasePrice}
              onChange={setPurchasePrice}
              min={10000}
              max={999999}
            />
          </div>
          <div className="section">
            <div className="title flex">
              Down Payment
              <span>{downPayment}%</span>
            </div>
            <Slider
              value={downPayment}
              onChange={setDownPayment}
              min={0}
              max={100}
            />
          </div>
        </Col>
        <Col sm="6"></Col>
      </Row>
    </div>
  );
};

export default PurchaseControls;
