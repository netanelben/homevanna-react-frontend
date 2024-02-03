import React from "react";
import { Row, Col } from "reactstrap";

import "./style.scss";

const PropertyCharacteristics = () => (
  <div className="BuyProcess-PropertyCharacteristics card-box">
    <div className="card-title">Property Characteristics</div>

    <Row>
      <Col sm="12" md="3">
        <div className="sub-title">Homevanna Exclusive</div>
      </Col>
      <Col sm="12" md="4">
        <div className="sub-title">What is it?</div>
        <p>
          This property is listed directly from the seller and only available
          through the Homevanna marketplace
        </p>
      </Col>
      <Col sm="12" md="5">
        <div className="sub-title">Benefits</div>
        <ul>
          <li>
            You can avoid competition and "buy it now" at the list price.​
          </li>
          <li>
            The home will have undergone a comprehensive inspection, title
            search and more – all of which are made available in the Diligence
            Documents to review.
          </li>
          <li>
            Transaction will only carry an inspection contingency if the posted
            inspection report is more than 4 months old.
          </li>
          <li>
            A Homevanna-affiliated broker represents the Seller in this
            transaction, but Homevanna will walk you through the process​.
          </li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col sm="12" md="3">
        <div className="sub-title">Homevanna Exclusive</div>
      </Col>
      <Col sm="12" md="4">
        <div className="sub-title">What is it?</div>
        <p>
          This property is listed directly from the seller and only available
          through the Homevanna marketplace
        </p>
      </Col>
      <Col sm="12" md="5">
        <div className="sub-title">Benefits</div>
        <ul>
          <li>
            All properties come with our{" "}
            <a href="#">30-day money back guarantee</a>
          </li>
          <li>
            Enjoy <a href="#">guaranteed rent</a> on vacant properties starting
            45 days after the home is rent-ready. Plus you will also pay no
            monthly management fees until your property is leased.
          </li>
          <li>
            This offer only applies to single-family properties and excludes
            properties with 2 or more units (duplexes, triplexes, fourplexes,
            multiplexes), commercial properties, “Homevanna One” properties and
            Homevanna portfolios
          </li>
        </ul>
      </Col>
    </Row>
  </div>
);

export default PropertyCharacteristics;
