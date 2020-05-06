import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import classnames from "classnames";
import { displayNumber } from "../../../../../utils";

import "./style.scss";

const FinancialHighlight = ({
  expectedRent,
  expenses,
  propertyTaxes,
  loanPayments,
  netCashFlow,
}) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="FinancialHighlight card-box">
      <div className="card-title">Annual Financial Highlight</div>
      <Nav tabs justified>
        <NavItem
          className={classnames({ active: activeTab === "1" })}
          onClick={() => {
            toggle("1");
          }}
        >
          Year 1
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "2" })}
          onClick={() => {
            toggle("2");
          }}
        >
          Year 3
        </NavItem>
        <NavItem
          className={classnames({ active: activeTab === "3" })}
          onClick={() => {
            toggle("3");
          }}
        >
          Year 5
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane>
          <div className="list-with-link">
            <ul className="list">
              <li className="flex">
                <span>Expected Rent</span>
                <span>${displayNumber(expectedRent)}</span>
              </li>
              <li className="flex">
                <span>Expenses</span>
                <span>-${displayNumber(expenses)}</span>
              </li>
              <li className="flex">
                <span>Property Taxes</span>
                <span>-${displayNumber(propertyTaxes)}</span>
              </li>
              <li className="flex">
                <span>Loan Payments</span>
                <span>-${loanPayments}</span>
              </li>
              <li className="flex">
                <span>Net Cash Flow</span>
                <span>${displayNumber(netCashFlow)}</span>
              </li>
            </ul>

            <a href="#">> See more in Financials</a>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

FinancialHighlight.defaultProps = {
  expectedRent: 9405,
  expenses: 3130,
  propertyTaxes: 2100,
  loanPayments: 0,
  netCashFlow: 4175,
};

export default FinancialHighlight;
