import React, { useContext } from "react";
import _ from "lodash";
import { Row, Col, Input, Button } from "reactstrap";
import { PageContext, displayNumber } from "../../../utils";
import { calcInvestmentPrice } from "../../../utils/formulas";

import "./style.scss";

const SellingCard = () => {
  const {
    purchasePrice,
    downPayment,
    closingCosts,
    estImmediateCosts,
    price,
  } = useContext(PageContext)[0];

  const totalInitialInvestment = _.round(
    calcInvestmentPrice({
      purchasePrice,
      downPayment,
      closingCosts,
      estImmediateCosts,
    })
  );

  return (
    <div className="SellingCard card-box">
      <div className="header flex">
        <span>• For Sale</span>
        <a href="#">Property Inquiry</a>
      </div>

      <span className="type">Initial Investment</span>

      <div className="price-and-links flex">
        <span className="price-large">
          ${displayNumber(totalInitialInvestment)}
        </span>
        <div className="links">
          <a href="#">Share</a>
          <a href="#">Add to Cart</a>
          <a href="#">Save</a>
        </div>
      </div>

      <div className="list-price">List Price: ${displayNumber(price)}</div>

      <Input defaultValue="$260,200" className="price-desktop" />

      <div className="controls-desktop">
        <Button className="btn-review btn-primary">Review Bid</Button>
        <button className="btn-buy-now">Buy It Now</button>
      </div>

      <Row className="price-and-controls-mobile">
        <Col xs="6">
          <Input defaultValue="$260,200" />
        </Col>

        <Col xs="6">
          <div className="controls">
            <Button className="btn-review btn-primary">Review Bid</Button>
            <button className="btn-buy-now">Buy It Now</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SellingCard;
