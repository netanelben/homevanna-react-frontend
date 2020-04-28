import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

import "./style.scss";

const PropertyCharacteristics = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="PropertyCharacteristics">
      <Row>
        <Col sm="8">
          <div className="title">Property Characteristics</div>
          <Nav tabs>
            <NavItem
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Homevanna Exclusive
            </NavItem>
            <NavItem
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Homevanna Guarantee
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">1</TabPane>
            <TabPane tabId="2">
              <p>
                Our industry-leading guarantee allows you to invest with total
                confidence, regardless of whether the home is leased or vacant.
              </p>
              <ul className="list">
                <li>
                  All properties come with our 30-day money back guarantee
                </li>
                <li>
                  Enjoy guaranteed rent on vacant properties starting 45 days
                  after the home is rent-ready. Plus you will also pay no
                  monthly management fees until your property is leased.
                </li>
                <li>
                  This offer applies to all single-family properties and
                  excludes properties with more than 2 units (duplex, triplex,
                  fourplexes), commercial properties and Roofstock portfolios.
                </li>
              </ul>
            </TabPane>
          </TabContent>
        </Col>

        <Col sm="4" className="management">
          <div className="title">Property Management</div>
          <div className="why-choose-card">
            Why choose?
            <br />
            <br />
            From repairs and maintenance to communicating with tenants, our
            preferred property management teams protect your assets and keep
            things running smoothly.
          </div>
          <button>View Options</button>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyCharacteristics;
