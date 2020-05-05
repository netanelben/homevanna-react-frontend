import React from "react";
import { Row, Col, Input, Button } from "reactstrap";
import "./style.scss";

const SellingCard = ({ price, listPrice }) => {
  return (
    <div className="SellingCard card-box">
      <div className="header flex">
        <span>• For Sale</span>
        <a href="#">Property Inquiry</a>
      </div>

      <span className="type">Initial Investment</span>

      <div className="price-and-links flex">
        <span className="price-large">${price}</span>
        <div className="links">
          <a href="#">Share</a>
          <a href="#">Add to Cart</a>
          <a href="#">Save</a>
        </div>
      </div>

      <div className="list-price">List Price: ${listPrice}</div>

      <Input value="$260,200" className="price-desktop" />

      <div className="controls-desktop">
        <Button className="btn-review btn-primary">Review Bid</Button>
        <button className="btn-buy-now">Buy It Now</button>
      </div>

      <Row className="price-and-controls-mobile">
        <Col xs="6">
          <Input value="$260,200" />
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

SellingCard.defaultProps = {
  price: "318,710",
  listPrice: "314,000",
};

export default SellingCard;
