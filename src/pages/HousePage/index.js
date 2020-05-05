import React, { useState } from "react";
import classnames from "classnames";
import { Row, Col, TabContent, TabPane, Nav, NavItem } from "reactstrap";
import PageHeader from "./PageHeader";
import SellingCard from "../../components/SellingCard";
import PurchaseControls from "../../components/PurchaseControls";
import { Summary, Financials, Analysis, BuyProcess } from "./tabpanels";

import "./style.scss";

const HousePage = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <PageHeader />

      <div className="page container">
        <Row className="main-row">
          <Col sm="12" md="4">
            <SellingCard />
          </Col>
          <Col sm="12" md="8">
            <PurchaseControls />
          </Col>
        </Row>

        <Nav tabs className="main-page-tabs">
          <NavItem
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Summary
          </NavItem>
          <NavItem
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Financials
          </NavItem>
          <NavItem
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Analysis
          </NavItem>
          <NavItem
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            Buy Process
          </NavItem>
          <NavItem
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            Similar Listings
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Summary />
          </TabPane>
          <TabPane tabId="2">
            <Financials />
          </TabPane>
          <TabPane tabId="3">
            <Analysis />
          </TabPane>
          <TabPane tabId="4">
            <BuyProcess />
          </TabPane>
          <TabPane tabId="5">5</TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default HousePage;
