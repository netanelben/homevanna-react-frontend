import React, { useState } from "react";
import { Row, Col, TabContent, TabPane, Nav, NavItem, Table } from "reactstrap";
import classnames from "classnames";
import Chart from "./Chart";

import "./style.scss";

const InvestmentValue = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="InvestmentValue card-box">
      <Nav tabs>
        <NavItem
          className={classnames({ active: activeTab === "1" })}
          onClick={() => {
            toggle("1");
          }}
        >
          Overview
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "2" })}
          onClick={() => {
            toggle("2");
          }}
        >
          Cash Flow
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "3" })}
          onClick={() => {
            toggle("3");
          }}
        >
          Equity
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="title">Est. Investment Value Over Time</div>

          <Chart />

          <Table borderless={true}>
            <thead>
              <tr>
                <th>Net Cash Flow</th>
                <th>Year 1</th>
                <th>Year 3</th>
                <th>Year 5</th>
                <th>Year 10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Annual</td>
                <td>$34,974</td>
                <td>$76,048</td>
                <td>$45,093</td>
                <td>$39,962</td>
              </tr>
              <tr>
                <td>Annual</td>
                <td>$34,974</td>
                <td>$76,048</td>
                <td>$45,093</td>
                <td>$39,962</td>
              </tr>
            </tbody>
          </Table>
        </TabPane>
        <TabPane tabId="2"></TabPane>
        <TabPane tabId="3"></TabPane>
      </TabContent>
    </div>
  );
};

export default InvestmentValue;
