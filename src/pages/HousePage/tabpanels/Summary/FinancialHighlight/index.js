import React, { useContext, useState } from "react";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import classnames from "classnames";
import Tooltip from "../../../../../components/Tooltip";
import { PageContext, displayNumber } from "../../../../../utils";
import { calcLoanPaymentsValue } from "../../../../../utils/formulas";

import "./style.scss";

const FinancialHighlight = ({
  expectedRent,
  expenses,
  propertyTaxes,
  netCashFlow,
}) => {
  const { purchasePrice, downPayment, loanInterestRate } = useContext(
    PageContext
  )[0];

  const loanPayments =
    downPayment === 100
      ? 0
      : calcLoanPaymentsValue({ purchasePrice, downPayment, loanInterestRate });

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
                <Tooltip context="ExpectedRent" />
                <span>${displayNumber(expectedRent)}</span>
              </li>
              <li className="flex">
                <span>Expenses</span>
                <Tooltip context="Expenses" />
                <span>-${displayNumber(expenses)}</span>
              </li>
              <li className="flex">
                <span>Property Taxes</span>
                <Tooltip context="PropertyTaxes" />
                <span>-${displayNumber(propertyTaxes)}</span>
              </li>
              <li className="flex">
                <span>Loan Payments</span>
                <Tooltip context="LoanPayments" />
                <span>-${loanPayments}</span>
              </li>
              <li className="flex">
                <span>Net Cash Flow</span>
                <Tooltip context="NetCashFlow" />
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
  netCashFlow: 4175,
};

export default FinancialHighlight;
