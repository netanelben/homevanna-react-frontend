import React, { useState } from "react";
import classnames from "classnames";
import { Row, Col, TabContent, TabPane, Nav, NavItem } from "reactstrap";
import { Summary } from "./tabpanels";

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="page">
      <Nav tabs>
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
        <TabPane tabId="2">2</TabPane>
        <TabPane tabId="3">3</TabPane>
        <TabPane tabId="4">4</TabPane>
        <TabPane tabId="5">5</TabPane>
      </TabContent>
    </div>
  );
};

export default IndexPage;
