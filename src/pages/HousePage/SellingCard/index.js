import React, { useContext } from "react";
import _ from "lodash";
import { Row, Col, Input, Button } from "reactstrap";
import { PageContext, displayNumber } from "../../../utils";
import {
  getMinPurchasePrice,
  getMaxPurchasePrice,
  calcInvestmentPrice,
} from "../../../utils/formulas";

import "./style.scss";

const SellingCard = () => {
  const {
    purchasePrice,
    downPayment,
    closingCosts,
    estImmediateCosts,
    price,
  } = useContext(PageContext)[0];
  const dispatch = useContext(PageContext)[1];

  const totalInitialInvestment = _.round(
    calcInvestmentPrice({
      purchasePrice,
      downPayment,
      closingCosts,
      estImmediateCosts,
    })
  );

  const handlePurchasePriceChange = ({ target }) => {
    dispatch({ type: "PURCHASE_PRICE_CHANGE", payload: target.value });
  };

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

      <div className="price-input-wrapper price-desktop">
        <Input
          type="number"
          value={purchasePrice}
          onChange={handlePurchasePriceChange}
          min={getMinPurchasePrice(price)}
          max={getMaxPurchasePrice(price)}
        />
      </div>

      <div className="controls-desktop">
        <Button className="btn-review btn-primary">Review Bid</Button>
        <button className="btn-buy-now">Buy It Now</button>
      </div>

      <Row className="price-and-controls-mobile">
        <Col xs="12" sm="6" className="price-input-wrapper">
          <Input
            type="number"
            value={purchasePrice}
            onChange={handlePurchasePriceChange}
            min={getMinPurchasePrice(price)}
            max={getMaxPurchasePrice(price)}
          />
        </Col>

        <Col xs="12" sm="6">
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
