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
                <th></th>
                <th>Year 5</th>
                <th>Year 10</th>
                <th>Year 20</th>
                <th>Year 30</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cumulative Net Cash Flow</td>
                <td>
                  $34,974
                  <div className="text-small">$1.709/mo</div>
                </td>
                <td>
                  $76,048<div className="text-small">$1.709/mo</div>
                </td>
                <td>
                  $45,093<div className="text-small">$1.709/mo</div>
                </td>
                <td>
                  $39,962<div className="text-small">$1.709/mo</div>
                </td>
              </tr>
              <tr>
                <td>Cumulative Appreciation Gain</td>
                <td>$34,974</td>
                <td>$76,048</td>
                <td>$45,093</td>
                <td>$39,962</td>
              </tr>
              <tr>
                <td>Equity Build Up</td>
                <td>$34,974</td>
                <td>$76,048</td>
                <td>$45,093</td>
                <td>$39,962</td>
              </tr>
              <tr>
                <td>Total Investment Value</td>
                <td>$466,083</td>
                <td>$763,048</td>
                <td>$845,093</td>
                <td>$2,539,962</td>
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
